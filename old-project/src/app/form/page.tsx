'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { submitToGoogleSheets } from '@/lib/googleSheetsApi';

type FormData = {
  firstName: string;
  lastName: string;
  phone: string;
  placeType: 'home' | 'store' | 'factory' | 'other';
  city: string;
  street: string;
  houseNumber: string;
  entrance: string;
  floor: string;
  apartmentNumber: string;
  chametzLocations: string;
  authorization: boolean;
};

export default function FormPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    phone: '',
    placeType: 'home',
    city: '',
    street: '',
    houseNumber: '',
    entrance: '',
    floor: '',
    apartmentNumber: '',
    chametzLocations: '',
    authorization: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.authorization) {
      alert('יש לאשר את מינוי השליחות');
      return;
    }
    
    setIsLoading(true);
    
    try {
      // שימוש בפונקציה מ-googleSheetsApi לשליחת הנתונים
      const success = await submitToGoogleSheets(formData);
      
      if (success) {
        // מעבר לדף הצלחה
        router.push('/success');
      } else {
        throw new Error('שגיאה בשליחת הטופס');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('אירעה שגיאה בשליחת הטופס. אנא נסו שוב מאוחר יותר.');
      setIsLoading(false);
    }
  };

  return (
    <div className="py-12">
      <div className="container-custom">
        <h1 className="text-4xl font-bold text-blue-700 mb-8 text-center">
          טופס מכירת חמץ
        </h1>
        
        <div className="max-w-3xl mx-auto">
          <div className="card mb-6">
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <p className="text-gray-700 text-lg">
                <strong className="text-blue-700">שימו לב:</strong> ניתן למלא את הטופס עד יום א׳, ערב בדיקת חמץ, בשעה 17:00. 
                טפסים שישלחו לאחר מכן לא יקלטו!
              </p>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="form-label">שם פרטי <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="form-label">שם משפחה <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="phone" className="form-label">טלפון</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="050-1234567"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="placeType" className="form-label">סוג מקום המכירה <span className="text-red-500">*</span></label>
                <select
                  id="placeType"
                  name="placeType"
                  value={formData.placeType}
                  onChange={handleChange}
                  required
                  className="form-input"
                >
                  <option value="home">בית פרטי</option>
                  <option value="store">חנות</option>
                  <option value="factory">מפעל</option>
                  <option value="other">אחר</option>
                </select>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">כתובת</h3>
              
              <div className="mb-6">
                <label htmlFor="city" className="form-label">עיר מגורים <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="street" className="form-label">רחוב <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    id="street"
                    name="street"
                    value={formData.street}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                
                <div>
                  <label htmlFor="houseNumber" className="form-label">מספר בית <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    id="houseNumber"
                    name="houseNumber"
                    value={formData.houseNumber}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div>
                  <label htmlFor="entrance" className="form-label">כניסה</label>
                  <input
                    type="text"
                    id="entrance"
                    name="entrance"
                    value={formData.entrance}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
                
                <div>
                  <label htmlFor="floor" className="form-label">קומה</label>
                  <input
                    type="text"
                    id="floor"
                    name="floor"
                    value={formData.floor}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
                
                <div>
                  <label htmlFor="apartmentNumber" className="form-label">מספר דירה</label>
                  <input
                    type="text"
                    id="apartmentNumber"
                    name="apartmentNumber"
                    value={formData.apartmentNumber}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="chametzLocations" className="form-label">
                  פירוט המקומות בהם נמצא החמץ <span className="text-red-500">*</span>
                  <small className="block text-gray-500">
                    לדוגמא: ארונות מטבח עליונים, מחסן, ארון שירות וכדו׳. אם המקומות מסומנים ניתן לכתוב "במקומות המסומנים"
                  </small>
                </label>
                <textarea
                  id="chametzLocations"
                  name="chametzLocations"
                  value={formData.chametzLocations}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="form-input"
                />
              </div>
              
              <div className="mb-8">
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="authorization"
                    checked={formData.authorization}
                    onChange={handleChange}
                    required
                    className="mt-1 ml-2"
                  />
                  <span className="text-gray-700">
                    אני הח"מ נותן כוח ורשות להרב יוסף שמעון פרטוש שליט"א ועושה אותו שליח ומורשה במקומי לעשות מכירת חמץ לכל מיני חמץ ותערובות חמץ שלי ביום יד׳ ניסן תשפ"ה. <span className="text-red-500">*</span>
                  </span>
                </label>
              </div>
              
              <div className="text-center">
                <button 
                  type="submit" 
                  className="btn-primary text-xl py-3 px-8 min-w-[200px]"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      שולח...
                    </span>
                  ) : 'שליחת הטופס'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 