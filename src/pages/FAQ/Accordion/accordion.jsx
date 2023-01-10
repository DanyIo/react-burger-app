import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Чи є у вас знижки або бонуси?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Постійні гості react-burger-app Room мають можливість отримати
            бонусну карту постійного гостя, яка зараховує 10% від суми
            рахунку.Скористатись бонусами можна в будь-який зручний час,
            сплативши бонусами рахунок повністю або частково.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Чи натуральні в нас продукти?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Так, натуральні. Власноруч їх вирощували.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Як довго займає кур'єрська доставка бургерів?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Ваше замовлення буде доставлене якомога швидше! Ми прагнемо
            доставити кожне замовлення оперативно, щоб їжа була в ідеальному
            стані і ще гарячою. Щойно до нас надходить повідомлення з ресторану
            про те, що ваше замовлення вже готове, ми вирушаємо за маршрутом
            доставки. Не хвилюйтеся, завдяки нашому досвіду ми доставимо все
            блискавично! Саме з метою забезпечити швидку доставку нами було
            створено декілька зон доставки в кожному місті.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Як працює сервіс доставки бургерів?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Ми завжди наголошуємо, що здоров'я та безпека користувачів
            react-burger-app — наш головний пріоритет. Доставка бургерів,
            замовлених у нашому додатку, завжди відповідає максимальним
            стандартам безпеки. Всі наші співробітники та кур'єри проінформовані
            про чинні нормативні акти та суворо дотримуються всіх
            санітарно-гігієнічних норм. По-перше, відкрийте додаток
            react-burger-app і надайте інформацію про себе — це необхідно для
            того, щоб ми могли обслужити вас на найвищому рівні. Перегляньте
            список бургерів, доступних у вашій зоні доставки та виберіть те, що
            вам подобається найбільше. Не забудьте про добавки, гарніри, десерти
            та напої! Зробивши своє замовлення, оплатіть його та скажіть нам,
            куди доставляти. Наші кур'єри моментально доставлять ваше
            замовлення, причому їжа буде ще гарячою!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            За яким графіком працює доставка бургерів в react-burger-app?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Графік роботи залежить від кожного окремого ресторану. Варто
            нагадати, що в деяких містах Іспанії й досі діють обмеження на
            пересування, що може вплинути на графік роботи ресторанів і
            здійснення доставки ваших улюблених бургерів. Відкрийте додаток, щоб
            отримати всю необхідну інформацію.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
