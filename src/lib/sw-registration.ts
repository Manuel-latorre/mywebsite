export const registerServiceWorker = async () => {
    if ('serviceWorker' in navigator && import.meta.env.PROD) {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js');
        
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                console.log('Nueva versión disponible');
              }
            });
          }
        });
  
        console.log('SW registrado correctamente');
      } catch (error) {
        console.log('Error registrando SW:', error);
      }
    }
  };