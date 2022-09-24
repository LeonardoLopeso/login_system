PARA VALIDAR ACESSO:
- 1. Saber que tem um usuário logado.
- 2. Se tiver, eu tenho que VALIDAR este usuário.
- 3. Se sim, liberar o acesso.

PARA LOGAR:
- 1. Receber os dados de login
- 2. Envia uma requisição para o BACKEND validar estes dados no banco de daddos.
- 3. Estando correto, salva-se alguma referência ao usuário no browser.
- 4. Se estiver errado, avisa que está errado.

PARA DESLOGAR:
- 1. Apago a referência que existir no browser.
- 1.1 Enviar um requisição ao BACKEND avisando para destruir aquela referência.
- 2. Atualizo a página.