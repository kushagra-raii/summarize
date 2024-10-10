import app from './app';
import { services } from './config/serviceConfig';

const port = services.port || 3000;

app.listen(port, () => {
  console.log(`API Gateway running on port ${port}`);
});
