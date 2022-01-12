import Modal from 'react-modal';

interface NewtransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void; 
}

export function NewtransactionModal({ isOpen, onRequestClose }: NewtransactionModalProps) {
 return (
    <Modal 
    isOpen={isOpen}
    onRequestClose={onRequestClose} 
   >
     <h2>Cadastrar Transação</h2>
   </Modal>
 );

}