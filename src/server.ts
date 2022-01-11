import app from './app';
import routes from './routes/index.routes';
// import { sequelize } from './instances/mysql';

//testar a conexão com o banco de dados
// sequelize.authenticate().then(() => {
//   console.log('Connection has been established successfully.');
// }).catch(err => {
//   console.log('Unable to connect to the database:', err);
// })


const Port = process.env.PORT || 3000;
app.use(routes);

app.listen(Port, () => {
  console.log('Server started on port ' + Port);
});