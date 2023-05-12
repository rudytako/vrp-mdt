import { makeAutoObservable } from "mobx";

export default makeAutoObservable({
    modals: [] as string[],

    setModalVisible(modal: string, visible: boolean) {
        if (visible) {
            this.modals.push(modal);
        } else {
            this.modals = this.modals.filter(m => m !== modal);
        }
    },

    get allModals(){
        return this.modals;
    },

    isModalVisible(modal: string) {
        return this.modals.includes(modal);
    }
})