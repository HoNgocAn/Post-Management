import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { TextareaAutosize, TextField } from "@mui/material";
import "./ModalCreate.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions";

function ModalCreate(props) {

    const [data, setData] = useState({
        title: "",
        content: "",
        attachment: ""
    })

    const dispatch = useDispatch();

    const handleClose = () => {
        props.setIsShowModal(false);
    }
    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();

            reader.onloadend = () => {
                const base64String = reader.result.split(',')[1];
                setData({ ...data, attachment: base64String });
            };

            reader.readAsDataURL(file);
        } else {
            alert('Please upload an image file.');
            event.target.value = '';
        }
    };
    const handleCreate = () => {
        if (data.title && data.content && data.attachment) {
            dispatch(actions.createPost.createPostRequest(data)); // Gửi dữ liệu đi
            setData({
                title: "",
                content: "",
                attachment: ""
            });
            props.setIsShowModal(false); // Đóng modal sau khi gửi dữ liệu
        } else {
            alert('Please fill all fields and upload an image.');
        }
    };

    return (
        <>
            <Modal size="lg" show={props.isShowModal} className="modal-user" onHide={() => handleClose()} >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <span>{props.title}</span>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="content-body row">
                        <form>
                            <TextField label="title" value={data.title} onChange={(e) => setData({ ...data, title: e.target.value })} />
                            <TextareaAutosize minRows={10} maxRows={15} placeholder="content.." value={data.content} onChange={(e) => setData({ ...data, content: e.target.value })} />
                            <input type="file" accept="image/*" onChange={(event) => handleFileChange(event)} />
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => handleClose()}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleCreate()}>
                        Create
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalCreate;