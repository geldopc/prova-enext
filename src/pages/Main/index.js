import React, { Component } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import { Box, Flex, SubmitButton, Message } from './styles';

export default class Main extends Component {
  state = {
    name: '',
    email: '',
    department: '',
    phone: '',
    message: false,
    messageObj: {},
    src: null,
    crop: {
      unit: '%',
      width: 30,
      aspect: 16 / 9,
    },
  };

  onSelectFile = e => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () =>
        this.setState({ src: reader.result })
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  onImageLoaded = image => {
    this.imageRef = image;
  };

  onCropComplete = crop => {
    this.makeClientCrop(crop);
  };

  onCropChange = (crop, _) => {
    this.setState({ crop });
  };

  getCroppedImg(image, crop, fileName) {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    return new Promise((resolve, _) => {
      canvas.toBlob(blob => {
        if (!blob) {
          return;
        }
        blob.name = fileName;
        window.URL.revokeObjectURL(this.fileUrl);
        this.fileUrl = window.URL.createObjectURL(blob);
        resolve(this.fileUrl);
      }, 'image/jpeg');
    });
  }

  handleInputChangeName = e => {
    this.setState({ name: e.target.value });
  };

  handleInputChangeEmail = e => {
    this.setState({ email: e.target.value });
  };

  handleInputChangeDepartament = e => {
    this.setState({ department: e.target.value });
  };

  handleInputChangePhone = e => {
    this.setState({ phone: e.target.value });
  };

  handleSubmit = () => {
    console.log('handleSubmit...', this);
    this.setState({
      message: true,
      // name: '',
      // email: '',
      // department: '',
      // phone: '',
      src: null,
    });
  };

  handleClose = () => {
    console.log('handleClose...', this);
    this.setState({ message: false });
  };

  async makeClientCrop(crop) {
    if (this.imageRef && crop.width && crop.height) {
      const croppedImageUrl = await this.getCroppedImg(
        this.imageRef,
        crop,
        'newFile.jpeg'
      );
      this.setState({ croppedImageUrl });
    }
  }

  render() {
    const {
      name,
      email,
      department,
      phone,
      crop,
      croppedImageUrl,
      src,
      message,
    } = this.state;

    return (
      <Flex>
        <Box>
          <h1>Formulário</h1>
          <input
            type="text"
            className="form"
            placeholder="Nome"
            value={name}
            onChange={this.handleInputChangeName}
          />
          <input
            type="text"
            className="form"
            placeholder="E-mail"
            value={email}
            onChange={this.handleInputChangeEmail}
          />
          <input
            type="text"
            className="form"
            placeholder="Departamento"
            value={department}
            onChange={this.handleInputChangeDepartament}
          />
          <input
            type="text"
            className="form"
            placeholder="Telefone"
            value={phone}
            onChange={this.handleInputChangePhone}
          />
          <div className="preview">
            {croppedImageUrl && (
              <img
                alt="Crop"
                style={{ maxWidth: '100%' }}
                src={croppedImageUrl}
              />
            )}
          </div>
          <SubmitButton onClick={this.handleSubmit}>Gravar</SubmitButton>
        </Box>
        <Box>
          <h1>Selecionar Imagem</h1>
          <input type="file" onChange={this.onSelectFile} />
          {src && (
            <ReactCrop
              src={src}
              crop={crop}
              onImageLoaded={this.onImageLoaded}
              onComplete={this.onCropComplete}
              onChange={this.onCropChange}
            />
          )}
        </Box>
        {message && (
          <Message>
            <h4>{name}</h4>
            <h4>{email}</h4>
            <h4>{department}</h4>
            <h4>{phone}</h4>
            <div className="preview">
              {croppedImageUrl && (
                <img
                  alt="Crop"
                  style={{ maxWidth: '100%' }}
                  src={croppedImageUrl}
                />
              )}
            </div>
            <SubmitButton onClick={this.handleClose}>Fechar</SubmitButton>
          </Message>
        )}
      </Flex>
    );
  }
}
