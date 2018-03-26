/**
*
* AvatarEditor
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import AvatarEditor from 'react-avatar-editor';

class AvatarEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: null,
      choosenAvatar: null,
      preview: false,
      saveButtonDisabled: true,
    };
    this.onClickSave = this.onClickSave.bind(this);
  }

  onClickSave = () => {
    if (this.editor) {
      this.setState({
        preview: true,
        choosenAvatar: this.editor.getImageScaledToCanvas(),
      });
    }
  }

  setEditorRef = (editor) => { this.editor = editor; }

  handleImageChange(e) {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        avatar: file,
        imagePreviewUrl: reader.result,
      });
      this.props.chooseAvatar(file);
    };
    reader.readAsDataURL(file);
  }

  render() {
    if (this.state.preview) {
      return (
        <div>
          {this.state.choosenAvatar.toBlob(
            (blob) => {
              const newImg = document.createElement('img');
              const url = URL.createObjectURL(blob);
              newImg.onload = () => {
                URL.revokeObjectURL(url);
              };
              newImg.src = url;
              newImg.className = 'circle-avatar';
              document.getElementById('preview').appendChild(newImg);
            })}
        </div>
      );
    }
    return (
      <div>
        <input
          type="file"
          onChange={(e) => this.handleImageChange(e)}
        />
        <AvatarEditor
          image={this.state.avatar}
          ref={this.setEditorRef}
          style={{ width: '100%' }}
          border={30}
          borderRadius={150}
          scale={1.2}
          onLoadSuccess={(img) =>
            this.setState({
              avatar: img,
              imagePreviewUrl: img,
              saveButtonDisabled: false,
            })
          }
        />
        <button
          className="btn btn-success"
          disabled={this.state.saveButtonDisabled}
          onClick={() => this.onClickSave()}
        >
          Preview
        </button>
      </div>
    );
  }
}
AvatarEdit.propTypes = {
  chooseAvatar: PropTypes.func,
};


export default AvatarEdit;
