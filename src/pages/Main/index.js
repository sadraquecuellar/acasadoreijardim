import React, {useState} from 'react';
import {
  FaTimes,
} from 'react-icons/fa';

import Button from '../../components/Button';
import Container from '../../components/Container';
import Form from '../../components/Form';
import Grid from '../../components/Grid';
import Input from '../../components/Input';
import MediumButton from '../../components/MediumButton';
import Popup from '../../components/Popup';
import TextArea from '../../components/TextArea';

import imgLogo from '../../assets/images/logo.png';
import imgMenu from '../../assets/images/cardapio.png';

import api from '../../services/api';

import {ImageLogo, MenuProducts, TitleOrder,
  ObsContainer, PopupContainer} from './styles';



function Main() {

  const [popupObsVisible, setPopupObsVisible] = useState(false);
  const [request, setRequest] = useState({ 
    name: '',
    address: '',
    reference: '',
    order: '',
    observation: '',
  });

  const requestFinish = async () =>{   
    if(request.name === '' || 
      request.address === '' || 
      request.order === ''){
      alert('Preencha os campos obrigatórios')
    }else{
      try {
        // await api.post('/request',{pedido: request})
        // alert("enviando request");
        console.log("pedido:", request)
        await api.post('/request',{ pedido: request})
        // await api.get('/teste',{ pedido: request})
      } catch (error) {
        console.log("error:", error)
      }
    }
    setRequest({
      name: '',
      address: '',
      reference: '',
      order: '',
      observation: '',
    })
   
  }


  return( 
    <Container>
      <Grid>
        <div className="row" style={{display: 'flex', justifyContent: 'center'}}>
          <ImageLogo>
          <img src={imgLogo} />
          </ImageLogo>
        </div> 
        <div className="row" style={{display: 'flex', justifyContent: 'center'}}>
          <MenuProducts>
            <img src={imgMenu} />
          </MenuProducts>
        </div>
        <div id="order" style={{display: 'flex',flexDirection: 'column',justifyContent: 'center', 
        alignItems: 'center', width:'100%'}}>
          <div className="row" style={{display: 'flex', justifyContent: 'center'}}>
            <TitleOrder>
              <h1>Realizar Pedido</h1>
            </TitleOrder>
          </div>
          <div className="row">
            <Form>  
              <Input 
                required
                name="name"
                label="Nome *"
                placeholder="Nome Completo"
                value={request.name}
                onChange={(e)=> setRequest({
                  name: e.target.value,
                  address: request.address,
                  reference: request.reference,
                  order: request.order,
                  observation: request.observation,
                })}
              />
              <Input 
                required
                name="address"
                label="Endereço *"
                placeholder="Endereço (Rua, Número, Bairro) "
                value={request.address}
                onChange={(e)=> setRequest({
                  name: request.name,
                  address: e.target.value,
                  reference: request.reference,
                  order: request.order,
                  observation: request.observation,
                })}
              />
              <Input 
                name="reference"
                label="Ponto de Referência"
                placeholder="Ponto de referência"
                value={request.reference}
                onChange={(e)=> setRequest({
                  name: request.name,
                  address: request.address,
                  reference: e.target.value,
                  order: request.order,
                  observation: request.observation,
                })}
              />
              <Input 
                required
                name="pedido"
                label="Pedido *"
                placeholder="Produtos que você deseja"
                value={request.order}
                onChange={(e)=> setRequest({
                  name: request.name,
                  address: request.address,
                  reference: request.reference,
                  order: e.target.value,
                  observation: request.observation,
                })}
              />
              <TextArea 
                name="reference"
                label="Observações"
                placeholder="Observações a respeito do pedido"
                value={request.observation}
                onChange={(e)=> setRequest({
                  name: request.name,
                  address: request.address,
                  reference: request.reference,
                  order: request.order,
                  observation: e.target.value,
                })}
              />
              <div className="row" style={{display: 'flex', 
          justifyContent: 'center', marginBottom: '30px'}}>
            <MediumButton type="submit" onClick={()=> requestFinish()}>
              <div>Finalizar</div>
            </MediumButton>
          </div>
            </Form>
          </div>
          {/* <div className="row" style={{display: 'flex', 
          justifyContent: 'center', marginBottom: '30px'}}>
            <MediumButton onClick={()=> requestFinish()}>
              <div>Finalizar</div>
            </MediumButton>
          </div> */}
        </div>
        
      </Grid>
      <Popup visible={popupObsVisible}>
          <div className="content">
            <div className="content-header">
              <FaTimes onClick={() => setPopupObsVisible(false)} />
            </div>
            <PopupContainer>
              <ObsContainer>
                <h4>Observações</h4>
                <textarea
                  name="obs"
                  id="obs"
                  cols="30"
                  rows="10"
                />
              </ObsContainer>

              <Button
                type="button"
                onClick={() => {
                  setPopupObsVisible(false);
                }}
              >
                Salvar
              </Button>
            </PopupContainer>
          </div>
        </Popup>
    </Container>
  );
}

export default Main;