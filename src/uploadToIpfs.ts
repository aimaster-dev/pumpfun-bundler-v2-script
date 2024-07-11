
import fs from 'fs';
import { FleekSdk, PersonalAccessTokenService } from '@fleekxyz/sdk';
import dotenv from 'dotenv';
import metadata from './metadata';
dotenv.config();

const pat = process.env.PAT || '';
const project_id = process.env.PROJECT_ID || '';
const imageName = "bambi.webp";
const metadataName = "metadata.json";

const patService = new PersonalAccessTokenService({
  personalAccessToken: pat,
  projectId: project_id,
})

const fleekSdk = new FleekSdk({ accessTokenService: patService })

async function uploadFileToIPFS(filename: string, content: Buffer) {
  const result = await fleekSdk.ipfs().add({
    path: filename,
    content: content
  });
  return result;
}

export const getUploadedMetadataURI = () : string => {
  const fileContent = fs.readFileSync(imageName);

  uploadFileToIPFS(imageName, fileContent).then(result => {
    console.log('Image uploaded to IPFS:', result);
    console.log('IPFS URL:', `https://cf-ipfs.com/ipfs/${result.cid}`);
    const data = {
      "name": metadata.name,
      "symbol": metadata.symbol,
      "description": metadata.description,
      "image": `https://cf-ipfs.com/ipfs/${result.cid}`,
      "showName": metadata.showName,
      "createdOn": metadata.createdOn,
      "twitter": metadata.twitter,
      "telegram": metadata.telegram,
      "website": metadata.website
    }
    const metadataString = JSON.stringify(data);
    const bufferContent = Buffer.from(metadataString, 'utf-8');
    fs.writeFileSync(metadataName, bufferContent);

    const metadataContent = fs.readFileSync(metadataName);
    uploadFileToIPFS(metadataName, metadataContent).then(result => {
      console.log('File uploaded to IPFS:', result);
      console.log('IPFS URL:', `https://cf-ipfs.com/ipfs/${result.cid}`)
      return `https://cf-ipfs.com/ipfs/${result.cid}`;
    }).catch(error => {
      console.error('Error uploading file to IPFS:', error);
      return "";
    });
  }).catch(error => {
    console.error('Error uploading file to IPFS:', error);
    return "";
  });
  return "";
}