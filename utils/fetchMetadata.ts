"use server"
import axios from 'axios';

interface MetadataResponse {
  title: string;
  image: string;
  url : string;
  description: string;
  author?: string;
}

