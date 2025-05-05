/**
 * API service for interacting with the backend
 */

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

/**
 * Get all disorders
 */
export const getDisorders = async () => {
  try {
    const response = await fetch(`${API_URL}/disorders`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch disorders');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching disorders:', error);
    throw error;
  }
};

/**
 * Get a single disorder by ID
 */
export const getDisorderById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/disorders/${id}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch disorder');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching disorder:', error);
    throw error;
  }
};

/**
 * Register a new user
 */
export const registerUser = async (userData) => {
  try {
    const response = await fetch(`${API_URL}/users/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.msg || 'Failed to register user');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

/**
 * Login a user
 */
export const loginUser = async (credentials) => {
  try {
    const response = await fetch(`${API_URL}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.msg || 'Failed to login');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

/**
 * Get current user profile
 */
export const getUserProfile = async (token) => {
  try {
    const response = await fetch(`${API_URL}/profile/me`, {
      headers: {
        'x-auth-token': token,
      },
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch profile');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching profile:', error);
    throw error;
  }
};

/**
 * Create or update user profile
 */
export const updateProfile = async (profileData, token) => {
  try {
    const response = await fetch(`${API_URL}/profile`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': token,
      },
      body: JSON.stringify(profileData),
    });
    
    if (!response.ok) {
      throw new Error('Failed to update profile');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error updating profile:', error);
    throw error;
  }
};

/**
 * Get user progress
 */
export const getUserProgress = async (token) => {
  try {
    const response = await fetch(`${API_URL}/progress/user`, {
      headers: {
        'x-auth-token': token,
      },
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch progress');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching progress:', error);
    throw error;
  }
};

/**
 * Get user stats
 */
export const getUserStats = async (token) => {
  try {
    const response = await fetch(`${API_URL}/progress/stats`, {
      headers: {
        'x-auth-token': token,
      },
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch stats');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching stats:', error);
    throw error;
  }
};

/**
 * Submit game progress
 */
export const submitGameProgress = async (progressData, token) => {
  try {
    const response = await fetch(`${API_URL}/progress`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': token,
      },
      body: JSON.stringify(progressData),
    });
    
    if (!response.ok) {
      throw new Error('Failed to submit progress');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error submitting progress:', error);
    throw error;
  }
}; 