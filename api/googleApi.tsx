import axiosInstance from 'config/axios';

export const apiGoogleGetRestaurant = (place: string) => axiosInstance.get(`?query=restaurants+in+${place}&key=${process.env.API_KEY}`);
