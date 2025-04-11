'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const contentFormSchema = z.object({
  topic: z.string().min(3, 'Topic must be at least 3 characters'),
  tone: z.enum(['professional', 'casual', 'motivational', 'educational']),
  contentType: z.enum(['post', 'article', 'poll']),
  keywords: z.string().optional(),
});

type ContentFormData = z.infer<typeof contentFormSchema>;

export default function ContentGeneratorForm() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContentFormData>({
    resolver: zodResolver(contentFormSchema),
  });

  const onSubmit = async (data: ContentFormData) => {
    setIsGenerating(true);
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) throw new Error('Failed to generate content');
      
      const result = await response.json();
      setGeneratedContent(result.content);
    } catch (error) {
      console.error('Error generating content:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Topic</label>
          <input
            type="text"
            {...register('topic')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.topic && (
            <p className="mt-1 text-sm text-red-600">{errors.topic.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Tone</label>
          <select
            {...register('tone')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="professional">Professional</option>
            <option value="casual">Casual</option>
            <option value="motivational">Motivational</option>
            <option value="educational">Educational</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Content Type</label>
          <select
            {...register('contentType')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="post">Post</option>
            <option value="article">Article</option>
            <option value="poll">Poll</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Keywords (optional)</label>
          <input
            type="text"
            {...register('keywords')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Separate keywords with commas"
          />
        </div>

        <button
          type="submit"
          disabled={isGenerating}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
        >
          {isGenerating ? 'Generating...' : 'Generate Content'}
        </button>
      </form>

      {generatedContent && (
        <div className="mt-6">
          <h3 className="text-lg font-medium text-gray-900 mb-2">Generated Content</h3>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="whitespace-pre-wrap">{generatedContent}</p>
          </div>
          <div className="mt-4 flex justify-end space-x-4">
            <button
              onClick={() => {/* TODO: Implement save draft */}}
              className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              Save as Draft
            </button>
            <button
              onClick={() => {/* TODO: Implement schedule post */}}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Schedule Post
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 