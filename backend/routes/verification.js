import express from 'express';
import multer from 'multer';
import smileIdentityService from '../services/smileIdentityService.js';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/verify-documents', 
  upload.fields([
    { name: 'selfie', maxCount: 1 },
    { name: 'idCardFront', maxCount: 1 },
    { name: 'idCardBack', maxCount: 1 }
  ]), 
  async (req, res) => {
    try {
      const { country, userId } = req.body;
      const { selfie, idCardFront, idCardBack } = req.files;

      // Validate required files
      if (!selfie || !idCardFront || !idCardBack) {
        return res.status(400).json({ 
          error: 'All files (selfie, idCardFront, idCardBack) are required' 
        });
      }

      // Prepare data for Smile Identity
      const formData = new FormData();
      formData.append('selfie', selfie[0].buffer, selfie[0].originalname);
      formData.append('idCardFront', idCardFront[0].buffer, idCardFront[0].originalname);
      formData.append('idCardBack', idCardBack[0].buffer, idCardBack[0].originalname);
      formData.append('country', country);
      if (userId) formData.append('userId', userId);

      // Add signature
      const signature = smileIdentityService.generateSignature();
      formData.append('signature', signature);

      // Send to Smile Identity
      const result = await smileIdentityService.uploadDocuments(formData);

      res.json({ success: true, result });
    } catch (error) {
      console.error('Document verification error:', error);
      res.status(500).json({ 
        error: error.message || 'Internal server error during verification' 
      });
    }
  }
);

export default router;