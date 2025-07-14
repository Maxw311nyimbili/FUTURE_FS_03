import smileIdentityCore from "smile-identity-core";
import dotenv from "dotenv";


// Configure dotenv to read .env.local
dotenv.config({ path: 'C:\\Users\\Lenovo\\Desktop\\task03\\.env.local' });

const { Signature } = smileIdentityCore;

class SmileIdentityService {
  constructor() {
    this.partner_id = process.env.SMILE_PARTNER_ID;
    this.api_key = process.env.SMILE_API_KEY;
    this.connection = new Signature(this.partner_id, this.api_key);
  }

  generateSignature(timestamp) {
    return this.connection.generate_signature(timestamp);
  }

  async uploadDocuments(formData) {
    try {
      const response = await fetch('https://testapi.smileidentity.com/v1/upload', {
        method: 'POST',
        body: formData
      });
      return await response.json();
    } catch (error) {
      throw new Error(`Smile ID API error: ${error.message}`);
    }
  }
}

export default new SmileIdentityService();