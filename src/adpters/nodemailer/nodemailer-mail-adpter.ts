import nodemailer from 'nodemailer';
import { MailAdpter, SendMailData } from "../mail-adpater";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "d9cec88058f2ae",
    pass: "76f475308a72d5"
  }
});


export class NodemailerMailAdpter implements MailAdpter {
  async sendMail({ body, subject }: SendMailData) {
    await transport.sendMail({
      from: "Equipe FeedGet <oi@feedget.com>",
      to: "Gustavo <guh.contato.work@outlook.com.br>",
      subject,
      html: body
    })
  }
}
