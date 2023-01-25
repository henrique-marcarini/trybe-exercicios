const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];

  const enviarEmail = (email) => {
    console.log(`Email para ${email} enviado com sucesso!`)
  };

  emailListInData.forEach(enviarEmail);

  