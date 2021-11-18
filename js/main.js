const app = new Vue ({
    el: '#app',
    data: {
        profiloUtente: {
            nameUtente: 'Stefano Fabrin',
            avatar: 'avatar_7',
        },
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },    
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],
        contactSlide: 0,
        newMessage: '',
        search: '',
    },

    created() {
        const newformat = dayjs().format('DD/MM/YY hh:mm:ss a');
        console.log(newformat);
    },

    methods: {
        changeUtente(indexChange) {
            // console.log(indexChange);
            this.contactSlide = indexChange;
        },

        addNewMessage() {
            // console.log(this.newMessage);

            if(this.newMessage !== '') {
                
                const newMessage = {
                    date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                    text: this.newMessage,
                    status: 'sent'
                }

                this.contacts[this.contactSlide].messages.push(newMessage);
                this.newMessage = '';

                setTimeout( () => {
                    const newMessage = {
                        date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                        text: 'ciao',
                        status: 'received'
                    }
    
                    this.contacts[this.contactSlide].messages.push(newMessage);
                }, 2000)
            }
        },

        filterList() {
            console.log(this.search);
            
            // l'idea e' che al keyup sull'input di ricerca ti parte una funzione che si prende il valore dell'input e setta la proprieta visible a true solo a quei contatti che contengono la stringa nell'input

            // dopodiche' nell'html li filtri e mostri solo un contatto se visible e' a true
            this.contacts.forEach((contact) => {
                if(contact.includes(this.search)) {
                    contact.visible = true
                } else {contact.visible = false}
            })
        }
    },

    // computed: {
    //     filterList() {
    //         return this.contacts.filter(contact => {
    //             return contact.name.toLowerCase().includes(this.search.toLowerCase())
    //         })
    //     },
    // },

});
