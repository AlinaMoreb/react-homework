import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material';

function App() {
  
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* Верхняя панель */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            Мое React-приложение
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Основной контейнер */}
      <Container style={{ marginTop: '50px', textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Добро пожаловать в Material UI!
        </Typography>

        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          Открыть диалог
        </Button>

        {/* Диалоговое окно */}
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Привет!</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Это диалоговое окно с текстом и кнопками для закрытия.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Закрыть</Button>
          </DialogActions>
        </Dialog>
      </Container>
    </div>
  );
}

export default App;


