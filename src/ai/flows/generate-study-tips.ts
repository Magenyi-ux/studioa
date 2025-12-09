'use server';

/**
 * @fileOverview AI flow for generating personalized daily study tips.
 *
 * - generateStudyTips - A function that generates daily study tips based on user input.
 * - GenerateStudyTipsInput - The input type for the generateStudyTips function.
 * - GenerateStudyTipsOutput - The return type for the generateStudyTips function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateStudyTipsInputSchema = z.object({
  subjects: z
    .array(z.string())
    .describe('List of subjects the student is studying.'),
  learningGoals:
    z.string().describe('The student\'s specific learning goals.'),
});
export type GenerateStudyTipsInput = z.infer<typeof GenerateStudyTipsInputSchema>;

const GenerateStudyTipsOutputSchema = z.object({
  studyTips: z.array(z.string()).describe('A list of personalized study tips.'),
});
export type GenerateStudyTipsOutput = z.infer<typeof GenerateStudyTipsOutputSchema>;

export async function generateStudyTips(
  input: GenerateStudyTipsInput
): Promise<GenerateStudyTipsOutput> {
  return generateStudyTipsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateStudyTipsPrompt',
  input: {schema: GenerateStudyTipsInputSchema},
  output: {schema: GenerateStudyTipsOutputSchema},
  prompt: `You are an AI study assistant that helps students improve their study habits and stay motivated.

  Generate a list of daily study tips tailored to the student's subjects and learning goals.

  Subjects: {{subjects}}
  Learning Goals: {{learningGoals}}

  Here are some general tips, but be sure to personalize them:
  - Break down study sessions into smaller, manageable chunks.
  - Use active recall techniques like flashcards or practice questions.
  - Find a quiet and comfortable study environment.
  - Take regular breaks to avoid burnout.
  - Review and revise notes regularly.
  - Get enough sleep and eat nutritious meals.
  - Stay organized and plan study schedules.
  - Seek help from teachers or classmates when needed.
  `,
});

const generateStudyTipsFlow = ai.defineFlow(
  {
    name: 'generateStudyTipsFlow',
    inputSchema: GenerateStudyTipsInputSchema,
    outputSchema: GenerateStudyTipsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
