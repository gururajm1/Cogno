import { useEffect, useRef, useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as blazeface from '@tensorflow-models/blazeface';
import { Expression, ExpressionData } from '../types';

export const useExpressionDetection = () => {
  const [isModelLoaded, setIsModelLoaded] = useState(false);
  const modelRef = useRef<blazeface.BlazeFaceModel | null>(null);
  const expressionsRef = useRef<ExpressionData[]>([]);

  useEffect(() => {
    const loadModel = async () => {
      // Configure TensorFlow.js for better performance
      await tf.ready();
      tf.env().set('WEBGL_FORCE_F16_TEXTURES', true);
      tf.env().set('WEBGL_VERSION', 2);
      tf.env().set('WEBGL_CPU_FORWARD', true);

      // Load the lighter BlazeFace model
      modelRef.current = await blazeface.load({
        maxFaces: 1,
        inputWidth: 128,
        inputHeight: 128,
        scoreThreshold: 0.75
      });
      
      setIsModelLoaded(true);
    };
    loadModel();

    return () => {
      // Cleanup TensorFlow memory
      if (modelRef.current) {
        tf.dispose(modelRef.current);
      }
    };
  }, []);

  const detectExpression = async (videoElement: HTMLVideoElement | null): Promise<Expression | null> => {
    if (!videoElement || !modelRef.current) return null;

    try {
      const predictions = await modelRef.current.estimateFaces(videoElement, false);
      if (!predictions.length) return null;

      // Get face landmarks
      const face = predictions[0];
      
      // Simple expression detection based on face position
      // This is a simplified demo version - in production you'd want more sophisticated detection
      const expression = determineExpression(face);
      
      const expressionData: ExpressionData = {
        timestamp: Date.now(),
        expression
      };
      
      expressionsRef.current = [...expressionsRef.current, expressionData];
      return expression;
    } catch (error) {
      console.error('Error detecting expression:', error);
      return null;
    }
  };

  const determineExpression = (face: blazeface.NormalizedFace): Expression => {
    // Simple heuristic-based expression detection
    // In production, you'd want to use a proper ML model for this
    const { topLeft, bottomRight } = face;
    const faceHeight = bottomRight[1] - topLeft[1];
    const faceWidth = bottomRight[0] - topLeft[0];
    const aspectRatio = faceWidth / faceHeight;

    if (aspectRatio > 1.2) return 'Excited';
    if (aspectRatio < 0.8) return 'Confused';
    if (face.probability > 0.98) return 'Focused';
    if (face.probability < 0.85) return 'Bored';
    return 'Other';
  };

  return {
    isModelLoaded,
    detectExpression,
    getExpressions: () => expressionsRef.current
  };
};