import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const steps = [
  {
    label: 'О НАС',
    description: `P.E.R.N. Stacker - это проект трех разработчиков - энтузиастов. Эти ребята взяли
    на себя казалось бы непосильную задачу - помочь начинающим разработчикам понять, готовы ли они преодолеть
    все преграды на пути к первому оферу.`,
  },
  {
    label: 'Стек технологий "PERN"',
    description: `Это один из самых востребованых стеков, который включает в себя: 
     Postgres - реляционная база данных.
     Express - это минималистичный и гибкий веб-фреймворк для приложений Node.js.
     React - библиотека для отрисовки пользовательских интерфейсов.
     Node - это платформа с открытым исходным кодом для работы с языком JavaScript, построенная на движке Chrome V8.
      Она позволяет писать серверный код для веб-приложений и динамических веб-страниц.`,
  },
  {
    label: 'Что ты получишь?',
    description: `Пройдя наши чек листы, ты закроешь раз и навсегда все свои сомнения по поводу своей готовности в
    заветной работы программистом.`,
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={index === 2 ? <Typography variant="caption">Last step</Typography> : null}
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button variant="contained" onClick={handleNext} sx={{ mt: 1, mr: 1 }}>
                    {index === steps.length - 1 ? 'Финиш' : 'Далее'}
                  </Button>
                  <Button disabled={index === 0} onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                    Назад
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>На этом все - скорее заходи в профиль!</Typography>
          <Button variant="contained" onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Заново?
          </Button>
        </Paper>
      )}
    </Box>
  );
}
