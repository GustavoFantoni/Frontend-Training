function verificarFormatoEmail(email) {
    // Expressão regular para verificar o formato do email
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Verifica se o email corresponde ao formato da expressão regular
    if (regex.test(email)) {
      console.log("Formato de email correto.");
      return true;
    } else {
      console.log("Formato de email incorreto.");
      return false;
    }
  }