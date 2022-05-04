import express from 'express';
import { NodemailerMailAdpter } from './adpters/nodemailer/nodemailer-mail-adpter';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';

export const routes = express.Router();

routes.post('/feedbacks', async (req, res) => {
  const { comment, type, screenshot } = req.body;

  const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
  const nodemailerMailAdpter = new NodemailerMailAdpter()
  const submitFeedbackUseCase = new
    SubmitFeedbackUseCase(prismaFeedbacksRepository, nodemailerMailAdpter)

  await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot
  })

  res.status(201).send();
})
