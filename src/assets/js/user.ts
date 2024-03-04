export const getUserData = async () => {
    try {
      const response = await fetch('http://evohosting.cloud/api/users');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erro na chamada da API:', error);
      throw error;
    }
  };
  