import React, { useState } from 'react';
import { Upload, User, CreditCard, Camera, Globe, CheckCircle, X } from 'lucide-react';
import smileIdentityService from '../../../../backend/services/smileIdentityService';

const DocumentVerification = () => {
  const [formData, setFormData] = useState({
    selfie: null,
    idCardFront: null,
    idCardBack: null,
    country: '',
    userId: ''
  });
  
  const [previews, setPreviews] = useState({
    selfie: null,
    idCardFront: null,
    idCardBack: null
  });
  
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const countries = [
    'United States', 'Canada', 'United Kingdom', 'Germany', 'France', 'Italy', 'Spain',
    'Australia', 'Japan', 'South Korea', 'India', 'Brazil', 'Mexico', 'Argentina',
    'South Africa', 'Nigeria', 'Kenya', 'Egypt', 'UAE', 'Saudi Arabia', 'China',
    'Russia', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Switzerland',
    'Austria', 'Belgium', 'Poland', 'Czech Republic', 'Hungary', 'Greece', 'Portugal',
    'Ireland', 'New Zealand', 'Singapore', 'Malaysia', 'Thailand', 'Philippines',
    'Indonesia', 'Vietnam', 'Turkey', 'Israel', 'Morocco', 'Tunisia', 'Ghana',
    'Ethiopia', 'Tanzania', 'Uganda', 'Zambia', 'Zimbabwe', 'Botswana'
  ].sort();

  const handleFileUpload = (field, file) => {
    if (file && file.type.startsWith('image/')) {
      setFormData(prev => ({ ...prev, [field]: file }));
      
      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviews(prev => ({ ...prev, [field]: e.target.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const removeFile = (field) => {
    setFormData(prev => ({ ...prev, [field]: null }));
    setPreviews(prev => ({ ...prev, [field]: null }));
  };

  const handleSubmit = async () => {
    setLoading(true);

    // Simulate API call
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('selfie', formData.selfie);
      formDataToSend.append('idCardFront', formData.idCardFront);
      formDataToSend.append('idCardBack', formData.idCardBack);
      formDataToSend.append('country', formData.country);
      if (formData.userId) {
        formDataToSend.append('userId', formData.userId);
      }

      // Simulate processing time
      
      const response = await smileIdentityService.uploadDocuments(formDataToSend);
      alert('Verification successful:', response);

      setSubmitted(true);
    } catch (error) {
      console.error('Verification failed:', error);
      alert('Verification failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const isFormValid = formData.selfie && formData.idCardFront && formData.idCardBack && formData.country;

  const FileUploadArea = ({ field, label, icon: Icon, preview, file }) => (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-gray-700 flex items-center gap-2">
        <Icon size={16} />
        {label}
      </label>
      
      {!preview ? (
        <div className="relative">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFileUpload(field, e.target.files[0])}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <p className="mt-2 text-sm text-gray-600">
              Click to upload or drag and drop
            </p>
            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
          </div>
        </div>
      ) : (
        <div className="relative">
          <img
            src={preview}
            alt={label}
            className="w-full h-48 object-cover rounded-lg border"
          />
          <button
            type="button"
            onClick={() => removeFile(field)}
            className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
          >
            <X size={16} />
          </button>
          <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
            {file?.name}
          </div>
        </div>
      )}
    </div>
  );

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <div className="text-center py-12">
          <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Verification Submitted!</h2>
          <p className="text-gray-600 mb-6">
            Your documents have been submitted for verification. We'll process them within 24-48 hours.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({ selfie: null, idCardFront: null, idCardBack: null, country: '', userId: '' });
              setPreviews({ selfie: null, idCardFront: null, idCardBack: null });
            }}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Submit Another Verification
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Document Verification</h1>
        <p className="text-gray-600">
          Please upload your identification documents and selfie for verification. All information is encrypted and secure.
        </p>
      </div>

      <div className="space-y-6">
        {/* Selfie Upload */}
        <FileUploadArea
          field="selfie"
          label="Upload Selfie"
          icon={Camera}
          preview={previews.selfie}
          file={formData.selfie}
        />

        {/* ID Card Front */}
        <FileUploadArea
          field="idCardFront"
          label="Upload Front of ID Card"
          icon={CreditCard}
          preview={previews.idCardFront}
          file={formData.idCardFront}
        />

        {/* ID Card Back */}
        <FileUploadArea
          field="idCardBack"
          label="Upload Back of ID Card"
          icon={CreditCard}
          preview={previews.idCardBack}
          file={formData.idCardBack}
        />

        {/* Country Selection */}
        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-700 flex items-center gap-2">
            <Globe size={16} />
            Country
          </label>
          <select
            value={formData.country}
            onChange={(e) => setFormData(prev => ({ ...prev, country: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          >
            <option value="">Select your country</option>
            {countries.map(country => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
        </div>

        {/* User ID (Optional) */}
        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-700 flex items-center gap-2">
            <User size={16} />
            User ID (Optional)
          </label>
          <input
            type="text"
            value={formData.userId}
            onChange={(e) => setFormData(prev => ({ ...prev, userId: e.target.value }))}
            placeholder="Enter your user ID (optional)"
            className="w-full px-3 py-2 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Submit Button */}
        <button
          type="button"
          onClick={handleSubmit}
          disabled={!isFormValid || loading}
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? (
            <div className="flex items-center justify-center gap-2">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              Processing...
            </div>
          ) : (
            'Submit for Verification'
          )}
        </button>

        {/* Requirements */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium text-gray-900 mb-2">Requirements:</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Clear, high-quality images</li>
            <li>• All text must be clearly visible</li>
            <li>• Images should be well-lit and in focus</li>
            <li>• Supported formats: PNG, JPG, GIF</li>
            <li>• Maximum file size: 10MB per image</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DocumentVerification;