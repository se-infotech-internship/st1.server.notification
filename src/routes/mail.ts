import  Router from 'koa-router';
import main from '../util/mailer';

const router = new Router();

router.get('/api/email/oplata/toUser/:email/:name/', async (ctx, err) => {
    const email: string = ctx.params.email;
    const name: string = ctx.params.name;

    const subject: string = "Оплата додатку";
    const text: string = `<h1>Шановний ${name}</h1>
        <p> Через 5 днів закінчується термін
        сплаченого періоду за додаток «Way
        without problem»
        Будь ласка, сплатіть за додаток, щоб
        використовувати всі його функції
        </p>
        <h1>Команда «Way without problem» </h1>
    `;

    await main(text, subject, email);
});

router.post('/api/email/new-fee/toUser', async(ctx,err)=>{
    
});

router.post('/api/email/status-fee/toUser', async(ctx,err)=>{

});

export default router;