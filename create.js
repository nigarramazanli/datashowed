document.addEventListener("DOMContentLoaded", function () {
    
    const tableBody = document.getElementById('tableBody');
    const selectedRowBody = document.getElementById('selectedRowBody');
     // Create leftContainer and rightContainer
     const leftContainer = document.getElementById("leftContainer"); 
     const rightContainer = document.getElementById("rightContainer");
     const leftLabelContainer=document.getElementById("leftLabelContainer");
     const noteContainer=document.createElement('div');
     const descriptionAdress = document.createElement('div');
     const changeContainerSelected =document.createElement('div');

     const leftSelectContainer=document.getElementById("leftSelectContainer");
     const leftSpanContainer=document.getElementById("leftSpanContainer");
     const rightLabelContainer=document.getElementById("rightLabelContainer");
     const rightSelectContainer=document.getElementById("rightSelectContainer");
     const rightSpanContainer=document.getElementById("rightSpanContainer");
     const leftImages=document.getElementById("leftImages");
     const leftradioInputs=document.getElementById("leftradioInputs");
     const leftlabelsofRadios=document.getElementById("leftlabelsofRadios");
     const rightlabelsofRadios=document.getElementById("rightlabelsofRadios");
     const rightImages=document.getElementById("rightImages");
     const rightradioInputs=document.getElementById("rightradioInputs");
     const temirChangeButton=document.getElementById('temirChangeButton');
     const creditChangeButton=document.getElementById('creditChangeButton');
     const changeContainer =document.getElementById('changeContainer');
     const selectsAndRadiosContainer3 = document.getElementById('selectsAndRadiosContainer3');
     const leftChangeContainer = document.createElement('div');
     leftChangeContainer.id='leftChangeContainer';
     const rightChangeContainer = document.createElement('div');
     rightChangeContainer.id='rightChangeContainer';
     const leftChangeLabelContainer= document.createElement('div');
     leftChangeLabelContainer.id="leftChangeLabelContainer";
     const leftChangeSelectContainer= document.createElement('div');
     leftChangeSelectContainer.id='leftChangeSelectContainer';
     const leftChangeSpanContainer = document.createElement('div');
     leftChangeSpanContainer.id='leftChangeSpanContainer';
     const rightChangeLabelContainer = document.createElement('div');
     rightChangeLabelContainer.id = 'rightChangeLabelContainer';
     const rightChangeSelectContainer = document.createElement('div');
     rightChangeSelectContainer.id='rightChangeSelectContainer';
     const rightChangeSpanContainer = document.createElement('div');
     rightChangeSpanContainer.id = 'rightChangeSpanContainer';
     const rightSecondChangeContainer = document.createElement('div');

     rightSecondChangeContainer.id='rightSecondChangeContainer';


     const rightSecondChangeLabelContainer= document.createElement('div');
     rightSecondChangeLabelContainer.id='rightSecondChangeLabelContainer';

     const rightSecondChangeSelectContainer = document.createElement('div');
     rightSecondChangeSelectContainer.id='rightSecondChangeSelectContainer';
     const rightSecondChangeSpanContainer = document.createElement('div');
     rightSecondChangeSpanContainer.id='rightSecondChangeSpanContainer';

     const leftSecondChangeContainer = document.createElement('div');
     leftSecondChangeContainer.id= 'leftSecondChangeContainer';

     const leftSecondChangeLabelContainer= document.createElement('div');
     leftSecondChangeLabelContainer.id ='leftSecondChangeLabelContainer'
     const leftSecondChangeSelectContainer = document.createElement('div');
     leftSecondChangeSelectContainer.id= 'leftSecondChangeSelectContainer';

     const leftSecondChangeSpanContainer = document.createElement('div');
     leftSecondChangeSpanContainer.id='leftSecondChangeSpanContainer';
     const seeAndChange_button = document.getElementById('seeAndChange_button');
     const axtaris_page_button = document.getElementById('axtaris_page_button');
     


     
    const selectedRowBodyDivs = document.createElement('div');

    
    function createField(labelText, fieldId, optionsOrPlaceholder, fieldType = 'select') {
        const fieldLabel = document.createElement('label');
        fieldLabel.textContent = labelText + ': ';
        selectedRowBodyDivs.appendChild(fieldLabel);
        const fieldValue = document.createElement('span');

        let fieldElement;
    
        if (fieldType === 'select') {
            fieldElement = document.createElement('select');
            fieldElement.id = fieldId;
            optionsOrPlaceholder.forEach(optionValue => {
                const option = document.createElement('option');
                option.value = optionValue;
                option.textContent = optionValue;
                fieldElement.appendChild(option);
            });
        } else if (fieldType === 'input') {
            fieldElement = document.createElement('input');
            fieldElement.type= 'number';
            fieldElement.id = fieldId;
            fieldElement.placeholder = optionsOrPlaceholder;
        }
    
        selectedRowBodyDivs.appendChild(fieldElement);
        selectedRowBodyDivs.appendChild(fieldValue);
    
        return fieldType === 'select' ? { select: fieldElement, valueSpan: fieldValue } : { input: fieldElement, valueSpan: fieldValue };
    }
    function createRadioField(labelText, groupName, options) {
        const fieldLabel = document.createElement('label');
        fieldLabel.textContent = labelText + ': ';
    
        const radioContainer = document.createElement('div');
    
        options.forEach(optionValue => {
            const optionLabel = document.createElement('label');
            optionLabel.textContent = optionValue;
            
            const optionRadio = document.createElement('input');
            optionRadio.type = 'radio';
            optionRadio.name = groupName; // groupName is used to group radio buttons together
            optionRadio.value = optionValue;
    
            radioContainer.appendChild(optionRadio);
            radioContainer.appendChild(optionLabel);
        });
    
        const fieldValue = document.createElement('span');
        return { label: fieldLabel, radios: radioContainer, valueSpan: fieldValue };
    }
    const menbeField =createRadioField('Mənbə','menbeRadio',["Sayt","Agent","Yenileme"])
    const qazField=createRadioField('Qaz', 'gasRadio',["Var","Yoxdur","Seçilməyib"]);
    const evEsyalariField=createRadioField('Əşyalar' ,'evEsyalariRadio' , ["Var", "Yoxdur","Seçilməyib"]);
    const isEcslusiveField =createRadioField('Eksluziv', 'eksclusiveRadio',["Bəli","Xeyr"]);
    const partialPayField =createRadioField('Hissəli Ödəmə ', 'partialRadio',["Bəli","Xeyr"]);
    const temirField =createRadioField('Təmir', 'temirRadio',["Bəli","Xeyr"])
    const eraziField = createField('Ərazi', 'eraziSelect', ["Bakixanov", "Sumqayit", "Elmler", "Yasamal", "Insaatcilar"],'select');
    const layiheField = createField('Layihə', 'layiheSelect', [1, 2, 3, 4, 5, 6, 7, 8, 9],'select');
    const mtkField = createField('Mtk', 'mtkSelect', ["Yasamal Mtk", "Saray Mtk","Elmler Mtk"],'select');
    const layiheTeyinatiField= createField('Layihə Təyinatı' , 'layiheTeyinatiSelect' , [1,2,3,4,5,6],'select');
    const emlakTypeField=createField('Əmlakın Tipi','emlakinTipiSelect',[1,2,3,4,5,6,7,13],'select');
    const emlakinSenediField=createField('Əmlakın Sənədi', 'emlakinSenediSelect', [1,2,3,4,5],'select');
    const mertebeField=createField('Mərtəbə', 'mertebeSelect', [1,2,3,4,5,6,7,8,9,10,11,12,13],'select');
    const umumiMertebeField=createField('Ümumi Mərtəbə' , 'umumiMertebeSelect',[1,2,3],'select');
    const otaqSayiField=createField('Otaq Sayı' , 'otaqsayiSelect',[3,4,5,13],'select');
    const otaqDeyisdirilibField=createField('Otaq Dəyişdirilib', 'otaqDeyisdirilibSelect',["Bəli", "Xeyr"],'select');
    const saytAdiField=createField('Sayt Adı', 'saytAdiSelect', ["Real Emlak","Bina.az","Emlak.az"],'select');

    const saleDateField=createField('Satış Tarixi', 'saleDateSelect', ["13.06.2024,","08.03.2024"],'select');



    const saytIdField=createField('Sayt Id','saytIdSelect','Sayt Id ','input');
    const torpaqSahesiField= createField('Torpaq Sahəsi' , 'torpaqSahesiSelect' , [1,2,3,4,5,6],'select');
    const saheField=createField('Sahə','saheSelect',[1,2,3,4,5,6,7],'select');
    const qarajField=createRadioField('Qaraj', 'qarajRadio',["Var","Yoxdur","Seçilməyib"],'select');

    const temirTypeField=createField('Təmir Tipi', 'temirTypeSelect',["Var","Yoxdur"],'select');
    const agentField=createField('Agent', 'AgentSelect',["Var","Yoxdur"],'select');
    const noteField=createField('Qeyd', 'noteSelect',["Var","Yoxdur"],'select');
    const unvanField=createField('Ünvan','UnvanSelect',['Yasamal','Elmler'],'select');
    const ilkinOdenisField=createField('Ilkin ödəniş', 'ilkinOdenisSelect','Ilkin ödəniş','input');
    const ayliqOdenisField=createField('Aylıq ödəniş', 'ayliqOdenisSelect','Aylıq ödəniş','input');
    const serviceField=createField('Servis Haqqı', 'serviceSelect',["Var","Yoxdur"],'select');
    const qiymetField=createField('Qiymət ', 'qiymetSelect','Qiymət','input');
    const deleteReasonNoteField=createField('Qeydin Silinmə Səbəbi ', 'qeydinSilinmeSebebiSelect',["Var","Yoxdur"],'select');
    const filialField=createField('Filial', 'filialSelect',["Var","Yoxdur"],'select');
    const creditExistField=createField('Credit Mövcudluğu', 'createExistSelect', ["Olar","Olmaz"],'select');
    const creditIdField=createField('Kredit Id','CreditSelect',[1,2,3,4,5],'select');
    const creditDateField=createField('Kredit Müddəti','creditDateSelect',["08.03.2024"],'select');
    const createdDateField=createField('Yaranma Tarixi','createdTimeSelect',[1,2,3,4,5,6,7,8],'select')
    const updateDateField=createField('Yenilənmə Tarixi', 'updateDateSelect',["16.07.2024"],'select');
    const deleteDateField=createField('Silinmə Tarixi','deleteDateSelect',[1,2,3,4,5],'select');
    const upDateUserIdField=createField('Yenilənən User İd' ,'upDateUserIdSelect',[1,2,3,4,5],'select');
    const deaktiveField=createField('Deaktiv', 'deaktuveSelect',["Var","Yoxdur"],'select');
    
   function appendField(container, containerLabel, containerSelect, containerSpan, labelText, field) {
    const fieldLabel = document.createElement('label');
    fieldLabel.textContent = labelText + ': ';
    containerLabel.appendChild(fieldLabel);
    container.appendChild(containerLabel);

    // Check if the field has a 'select' property or an 'input' property
    if (field.select) {
        containerSelect.appendChild(field.select); // Select dropdown
        container.appendChild(containerSelect);
    } else if (field.input) {
        containerSelect.appendChild(field.input); // Input element
        container.appendChild(containerSelect);
        field.valueSpan.style.visibility='hidden';;     
                                               
    }
    
    containerSpan.appendChild(field.valueSpan); // Span for selected value
    container.appendChild(containerSpan);
    
}


    function appendNoteAndDescriptionField(containerNote,imgSrc,field){
        const img = document.createElement('img');
        img.src = imgSrc;
        img.style.display = 'block'; // Ensure the image is displayed as a block element
        img.style.width= '5%';
        const spanText =document.createElement('span');
        spanText.textContent=field.valueSpan;
      
        field.valueSpan.style.width = '87%';
        containerNote.append(img,field.valueSpan);
        // container.appendChild(containerNote)
    }

    appendNoteAndDescriptionField(noteContainer,'file:///C:/Users/ASUS/Downloads/5854057_education_memo_notes_pad_reminder_icon%20(1).svg',noteField);
    appendNoteAndDescriptionField(descriptionAdress,'file:///C:/Users/ASUS/Downloads/1688864_geo_location_map_optimization_place_icon%20(3).svg',unvanField);

    noteContainer.style.width='100%';
    noteContainer.style.display= 'flex';
    noteContainer.style.justifyContent = 'space-around'; // Ensure space between items
    noteContainer.style.marginTop = '2vh';
    descriptionAdress.style.marginTop = '1vh';

    descriptionAdress.style.width = '100%';
    descriptionAdress.style.display = 'flex';
    descriptionAdress.style.justifyContent = 'space-around';
    

    const rightRadiosContainer =document.createElement('div');
    rightRadiosContainer.id='rightRadiosContainer';
    const leftradiosContainer = document.createElement('div');
    leftradiosContainer.id = 'leftradiosContainer';
    function appendRadioField(container,imagesField,labelsField,inputsField , imgSrc, labelText, field,animationClass) {
        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = labelText;
        img.style.display = 'block'; // Ensure the image is displayed as a block element
        img.style.width ='27px';
        img.classList.add(animationClass); // Add the animation class to the image

        const fieldLabel = field.label; // Reuse the label from the createRadioField function
        const radioContainer = field.radios;
        const fieldValue = field.valueSpan;
    
        // Append the image
        imagesField.appendChild(img);
    
        // Append the label text
        labelsField.appendChild(fieldLabel);
    
        // Append the radio buttons
        inputsField.appendChild(radioContainer);
    
        // Append the span for displaying the selected value
        container.append(imagesField,labelsField,inputsField);
    
        // Append a line break for spacing
    }
    const selectsAndRadiosContainer1 = document.getElementById('selectsAndRadiosContainer1');
    const selectsAndRadiosContainer2 =document.getElementById('selectsAndRadiosContainer2'); 
   
    
    selectsAndRadiosContainer2.appendChild(rightRadiosContainer)

    selectsAndRadiosContainer1.appendChild(leftradiosContainer);

    // appendRadioField(rightRadiosContainer,rightImages,rightlabelsofRadios,rightradioInputs, 'file:///C:/Users/ASUS/Downloads/2205232_botton_off_on_right_icon.svg',  'Status', qarajField,'scale');

    appendRadioField(leftradiosContainer,leftImages,leftlabelsofRadios,leftradioInputs ,"file:///C:/Users/ASUS/Downloads/172473_globe_global_internet_icon.svg" ,'Mənbə',menbeField,'scale');
    appendRadioField(leftradiosContainer,leftImages,leftlabelsofRadios,leftradioInputs, "file:///C:/Users/ASUS/Downloads/8680090_fire_fill_icon.svg" ,'Gaz',qazField,'rotate');
    appendRadioField(rightRadiosContainer,rightImages,rightlabelsofRadios,rightradioInputs, "file:///C:/Users/ASUS/Downloads/6586101_analytics_chart_diagram_pie_icon%20(1).svg" ,'Hissə-Hissə',partialPayField,'scale');
    appendRadioField(leftradiosContainer,leftImages,leftlabelsofRadios,leftradioInputs, "file:///C:/Users/ASUS/Downloads/1378841_fireplace_house_fire_home_interior_icon.svg" ,' Ev/Əşya', evEsyalariField,'scale');
    appendRadioField(rightRadiosContainer,rightImages,rightlabelsofRadios,rightradioInputs, "file:///C:/Users/ASUS/Downloads/3668833_maintenance_repair_service_icon.svg",'Təmirdədir?', temirField,'scale');
    appendRadioField(rightRadiosContainer,rightImages,rightlabelsofRadios,rightradioInputs,"file:///C:/Users/ASUS/Downloads/2639785_businessman_icon%20(1).svg" ,'Eksluziv', isEcslusiveField,'scale');
    appendRadioField(leftradiosContainer,leftImages,leftlabelsofRadios,leftradioInputs, 'file:///C:/Users/ASUS/Downloads/8961089_garage_smart%20home_smart%20garage_building_icon.svg',  'Qaraj', qarajField,'scale');



    appendField(leftChangeContainer, leftChangeLabelContainer,leftChangeSelectContainer,leftChangeSpanContainer, 'Təmirin Tipi', temirTypeField);
    appendField(leftChangeContainer, leftChangeLabelContainer,leftChangeSelectContainer,leftChangeSpanContainer, 'Xid/Haqqı', serviceField);
    appendField(leftChangeContainer, leftChangeLabelContainer,leftChangeSelectContainer,leftChangeSpanContainer, 'Sayt Adı', saytAdiField);
    appendField(rightChangeContainer, rightChangeLabelContainer,rightChangeSelectContainer,rightChangeSpanContainer, 'Qiymət', qiymetField);
    appendField(rightChangeContainer, rightChangeLabelContainer,rightChangeSelectContainer,rightChangeSpanContainer, 'Agent Adı', agentField);
    appendField(rightChangeContainer, rightChangeLabelContainer,rightChangeSelectContainer,rightChangeSpanContainer, 'Sayt İd', saytIdField);
    appendField(rightSecondChangeContainer, rightSecondChangeLabelContainer,rightSecondChangeSelectContainer,rightSecondChangeSpanContainer, 'Kredit', creditExistField);
    appendField(rightSecondChangeContainer, rightSecondChangeLabelContainer,rightSecondChangeSelectContainer,rightSecondChangeSpanContainer, 'Kredit Id', creditIdField );
    appendField(rightSecondChangeContainer, rightSecondChangeLabelContainer,rightSecondChangeSelectContainer,rightSecondChangeSpanContainer, 'Kredit Müddəti', creditDateField);
    appendField(rightSecondChangeContainer, rightSecondChangeLabelContainer,rightSecondChangeSelectContainer,rightSecondChangeSpanContainer, 'Ilkin ödəniş', ilkinOdenisField);

    appendField(rightSecondChangeContainer, rightSecondChangeLabelContainer,rightSecondChangeSelectContainer,rightSecondChangeSpanContainer, 'Aylıq Ödəniş', ayliqOdenisField);


    appendField(leftSecondChangeContainer, leftSecondChangeLabelContainer,leftSecondChangeSelectContainer,leftSecondChangeSpanContainer,'Yenil/User', upDateUserIdField);
    appendField(leftSecondChangeContainer, leftSecondChangeLabelContainer,leftSecondChangeSelectContainer,leftSecondChangeSpanContainer,'Satış Tarixi',saleDateField);
    appendField(leftSecondChangeContainer, leftSecondChangeLabelContainer,leftSecondChangeSelectContainer,leftSecondChangeSpanContainer, 'Yenilən/Tarixi', updateDateField);
    appendField(leftSecondChangeContainer, leftSecondChangeLabelContainer,leftSecondChangeSelectContainer,leftSecondChangeSpanContainer,'Qeydiy/Tarixi', createdDateField);




    // Append fields to leftContainer
    appendField(leftContainer, leftLabelContainer,leftSelectContainer,leftSpanContainer,'Ərazi', eraziField);
    appendField(leftContainer, leftLabelContainer,leftSelectContainer,leftSpanContainer, 'Layihə', layiheField);
    appendField(leftContainer, leftLabelContainer,leftSelectContainer,leftSpanContainer, 'Mtk', mtkField);
    appendField(leftContainer, leftLabelContainer,leftSelectContainer,leftSpanContainer, 'Təyinatı', layiheTeyinatiField);
    appendField(rightContainer, rightLabelContainer,rightSelectContainer,rightSpanContainer, 'Sənədi',  emlakinSenediField);
    appendField(rightContainer, rightLabelContainer,rightSelectContainer,rightSpanContainer, 'Otaq Sayı', otaqSayiField);
    appendField(rightContainer, rightLabelContainer,rightSelectContainer,rightSpanContainer, 'Ot/Dəyişmə', otaqDeyisdirilibField);
    // appendField(leftContainer, leftLabelContainer,leftSelectContainer,leftSpanContainer, 'Təmir Tipi', temirTypeField);
    appendField(leftContainer, leftLabelContainer,leftSelectContainer,leftSpanContainer, 'Ü/Mərtəbə', umumiMertebeField);
    appendField(leftContainer, leftLabelContainer,leftSelectContainer,leftSpanContainer, 'Mərtəbə', mertebeField);

    // appendField(leftContainer, leftLabelContainer,leftSelectContainer,leftSpanContainer,'Qiymət', qiymetField);
    // appendField(leftContainer, leftLabelContainer,leftSelectContainer,leftSpanContainer,'Xid/Haqqı', serviceField);
    // appendField(leftContainer, leftLabelContainer,leftSelectContainer,leftSpanContainer,'Qeyd', noteField);
    // appendField(leftContainer, leftLabelContainer,leftSelectContainer,leftSpanContainer,'Qeydin Silinmə Səbəbi', deleteReasonNoteField);
    



    // Append fields to rightContainer
    appendField(rightContainer, rightLabelContainer,rightSelectContainer,rightSpanContainer ,'Torpaq Sahəsi', torpaqSahesiField);
    appendField(rightContainer, rightLabelContainer,rightSelectContainer,rightSpanContainer, 'Sahə', saheField);
    // appendField(rightContainer, rightLabelContainer,rightSelectContainer,rightSpanContainer, 'Satış Tarixi',saleDateField);
    // appendField(rightContainer, rightLabelContainer,rightSelectContainer,rightSpanContainer, 'Yaranma/Tarixi', createdDateField);
    // appendField(rightContainer, rightLabelContainer,rightSelectContainer,rightSpanContainer, 'Yenilən/Tarixi', updateDateField);

    // appendField(rightContainer, rightLabelContainer,rightSelectContainer,rightSpanContainer,'Kredit Mövcud', creditExistField);
    // appendField(rightContainer, rightLabelContainer,rightSelectContainer,rightSpanContainer,'Kredit Müddəti', creditDateField);
    // appendField(rightContainer, rightLabelContainer,rightSelectContainer,rightSpanContainer,'Kredit Id', creditIdField);
    // appendField(rightContainer, rightLabelContainer,rightSelectContainer,rightSpanContainer,'Aylıq Ödəniş', ayliqOdenisField);
    // appendField(rightContainer, rightLabelContainer,rightSelectContainer,rightSpanContainer,'Ilkin ödəniş', ilkinOdenisField);
    // appendField(rightContainer, rightLabelContainer,rightSelectContainer,rightSpanContainer,'Yenilənən User', upDateUserIdField);
    // appendField(rightContainer, rightLabelContainer,rightSelectContainer,rightSpanContainer,'Sayt Adı', saytAdiField);
    // appendField(rightContainer, rightLabelContainer,rightSelectContainer,rightSpanContainer,'Sayt Id', saytIdField);
    // appendField(rightContainer, rightLabelContainer,rightSelectContainer,rightSpanContainer,'Agent', agentField);    

      function temirChangeButtonFunction(){
        changeContainer.append(leftChangeContainer,rightChangeContainer,noteContainer,descriptionAdress);
        // changeContainer.appendChild(leftChangeContainer);
        // changeContainer.appendChild();
        // changeContainer.appendChild();

    }
    const search_page=document.getElementById('search_page');
    const id_page= document.getElementById('id_page');

    function showIdPage(){
        id_page.style.display = 'flex';
        search_page.style.display = 'none';
    }
    function showSearchPage(){
        search_page.style.display = 'flex';
        id_page.style.display = 'none';
    }
    showIdPage()
    seeAndChange_button.addEventListener('click', showIdPage);
    axtaris_page_button.addEventListener('click', showSearchPage);
   

     function creditChangeButtonFunction(){
        changeContainer.append(leftSecondChangeContainer,rightSecondChangeContainer);

     }

     temirChangeButtonFunction();
     
     temirChangeButton.addEventListener('click',() =>{
        changeContainer.innerHTML = ''; // Clear the container
        temirChangeButtonFunction();
        temirChangeButton.classList.add('active')
        creditChangeButton.classList.remove('active');
     })

     creditChangeButton.addEventListener('click',() =>{
        changeContainer.innerHTML = ''; // Clear the container
        creditChangeButtonFunction();
        creditChangeButton.classList.add('active');
        temirChangeButton.classList.remove('active');
     })













    axios.get("http://10.10.88.251:2040/Sale/All") 
        .then(response => {
            console.log(response.data);
            const users = response.data;
            users.forEach(user => {
                const row = document.createElement('tr');   
                const idCell = document.createElement('td');
                idCell.textContent = user.id;
                row.appendChild(idCell);
                const emlakCell = document.createElement("td");
                emlakCell.textContent = user.emlakTypeId;
                row.appendChild(emlakCell);
                const eraziCell = document.createElement('td');
                eraziCell.textContent = user.address;
                row.appendChild(eraziCell);
                const layiheCell = document.createElement('td');
                layiheCell.textContent = user.layiheId;
                row.appendChild(layiheCell);
                const layihe_teyinatiCell = document.createElement('td');
                layihe_teyinatiCell.textContent = user.layiheTeyinatiId;
                row.appendChild(layihe_teyinatiCell);
                const mtkCell = document.createElement('td');
                mtkCell.textContent = user.mtkId;
                row.appendChild(mtkCell);
                const emlakinSenediCell = document.createElement('td');
                emlakinSenediCell.textContent=user.emlakSenedId;
                row.appendChild(emlakinSenediCell)
                const mertebeNomresiCell = document.createElement('td');
                mertebeNomresiCell.textContent = user.mertebeNomresi;
                row.appendChild(mertebeNomresiCell);
                const otaq_sayiCell = document.createElement('td');
                otaq_sayiCell.textContent = user.otaqSayi;
                row.appendChild(otaq_sayiCell);
                const otaq_deyisdirilibCell = document.createElement('td');
                otaq_deyisdirilibCell.textContent = user.otaqDeyismeId;
                row.appendChild(otaq_deyisdirilibCell);
                const menbeCell = document.createElement('td');
                menbeCell.textContent = user.melumatinMenbesi;
                row.appendChild(menbeCell);
                const unvanCell=document.createElement('td');
                unvanCell.textContent=user.locationId;
                row.appendChild(unvanCell);
                const saytAdiCell = document.createElement('td');
                saytAdiCell.textContent = user.saytAdi;
                row.appendChild(saytAdiCell);
                 const saytIdCell=document.createElement('td');
            saytIdCell.textContent=user.saytId;
            row.appendChild(saytIdCell);
            const temirCell =document.createElement('td');
            temirCell.textContent=user.isTemir;
            row.appendChild(temirCell);
            const temirTypeCell=document.createElement('td');
            temirTypeCell.textContent=user.temirTypeId;
            row.appendChild(temirTypeCell);
            const gasCell=document.createElement('td');
            gasCell.textContent=user.gas;
            row.appendChild(gasCell);
            const evEsyalariCell=document.createElement('td');
            evEsyalariCell.textContent=user.evEsyalari;
            row.appendChild(evEsyalariCell);
            const garageCell=document.createElement('td');
            garageCell.textContent=user.qaraj;
            row.appendChild(garageCell);
            const saheCell=document.createElement('td');
            saheCell.textContent=user.sahe;
            row.appendChild(saheCell);
            const torpaqSahesiCell=document.createElement('td');
            torpaqSahesiCell.textContent=user.torpaqSahesi;
            row.appendChild(torpaqSahesiCell);
           
    
            
            


            


            const umumiMertebeCell=document.createElement('td');
            umumiMertebeCell.textContent=user.umumiMertebe;
            row.appendChild(umumiMertebeCell);
            const noteCell=document.createElement('td');
            noteCell.textContent=user.note;
            row.appendChild(noteCell);
            const agentIdCell=document.createElement('td');
            agentIdCell.textContent=user.agentId;
            row.appendChild(agentIdCell);
            const serviceCell=document.createElement('td');
            serviceCell.textContent=user.serviceFeeId;
            row.appendChild(serviceCell);
            const priceCell =document.createElement('td');
            priceCell.textContent=user.price;
            row.appendChild(priceCell);
            const partionCell =document.createElement('td');
            partionCell.textContent=user.isHisseHisse;
            row.appendChild(partionCell);
            const creditExistsCell=document.createElement('td');
            creditExistsCell.textContent=user.creditVar;
            row.appendChild(creditExistsCell);
            const creditIdCell =document.createElement('td');
            creditIdCell.textContent=user.creditId;
            row.appendChild(creditIdCell);
            const creditMuddetiCell =document.createElement('td');
            creditMuddetiCell.textContent=user.creditMuddeti;
            row.appendChild(creditMuddetiCell);
            const ilkinOdenisCell=document.createElement('td');
            ilkinOdenisCell.textContent=user.ilkinOdenis;
            row.appendChild(ilkinOdenisCell);
            const ayliqOdenisCell=document.createElement('td');
            ayliqOdenisCell.textContent=user.ayliqOdenis;
            row.appendChild(ayliqOdenisCell);
            const createdDateCell =document.createElement('td');
            createdDateCell.textContent=user.createdDate;
            row.appendChild(createdDateCell);
            const yenilenmeTarixiCell =document.createElement('td');
            yenilenmeTarixiCell.textContent=user.updatedDate;
            row.appendChild(yenilenmeTarixiCell);
            const  deleteDateCell=document.createElement('td');
            deleteDateCell.textContent=user.deleteDate;
            row.appendChild(deleteDateCell);
            const salesDateCell=document.createElement('td');
            salesDateCell.textContent=user.saleDate;
            row.appendChild(salesDateCell);
            const  createdUserIdCell=document.createElement('td');
            createdUserIdCell.textContent=user.createdUserId;
            row.appendChild(createdUserIdCell);
            const updatedUserIdCell=document.createElement('td');
            updatedUserIdCell.textContent=user.updatedUserId;
            row.appendChild(updatedUserIdCell);
            const  deleteReasonNoteCell=document.createElement('td');
            deleteReasonNoteCell.textContent=user.deleteReasonNote;
            row.appendChild(deleteReasonNoteCell);
            const  branchIdCell=document.createElement('td');
            branchIdCell.textContent=user.branchId;
            row.appendChild(branchIdCell);
            const isEkskluciveCell =document.createElement('td');
            isEkskluciveCell.textContent=user.isEkskluziv;
            row.appendChild(isEkskluciveCell);
            const deaktivCell=document.createElement('td');
            deaktivCell.textContent=user.deaktiv;
            row.appendChild(deaktivCell);

                tableBody.appendChild(row); 
                document.getElementById('searchDate').addEventListener('input', filterTable);
document.getElementById('searchHome').addEventListener('input', filterTable);  
document.getElementById('searchErazi').addEventListener('input', filterTable);  
document.getElementById('searchLayihe').addEventListener('input', filterTable);
document.getElementById('searchLayiheTeyinati').addEventListener('input', filterTable);  
document.getElementById('searchMtk').addEventListener('input', filterTable);  

document.getElementById('searchEmlakSenedi').addEventListener('input', filterTable);
document.getElementById('searchMertebe').addEventListener('input', filterTable);  
document.getElementById('searchOtaqSayiMin').addEventListener('input', filterTable);
document.getElementById('searchOtaqSayiMax').addEventListener('input', filterTable);
document.getElementById('searchSaheMin').addEventListener('input', filterTable);
document.getElementById('searchSaheMax').addEventListener('input',filterTable);
document.getElementById('searchPriceMin').addEventListener('input',filterTable);
document.getElementById('searchPriceMax').addEventListener('input',  filterTable);
document.getElementById('searchOtaqDeyisdirilib').addEventListener('input', filterTable);
document.getElementById('searchUnvan').addEventListener('input', filterTable);  
document.getElementById('searchTemirType').addEventListener('input', filterTable);   
document.getElementById('gasVar').addEventListener('change', filterTable);
document.getElementById('gasYox').addEventListener('change', filterTable);
document.getElementById('gasSecilmeyib').addEventListener('change', filterTable);
document.getElementById('garageVar').addEventListener('change', filterTable);
document.getElementById('garageYox').addEventListener('change', filterTable);
document.getElementById('garageSecilmeyib').addEventListener('change', filterTable);
document.getElementById('esyalarVar').addEventListener('change', filterTable);
document.getElementById('esyalarYox').addEventListener('change', filterTable);
document.getElementById('esyalarSecilmeyib').addEventListener('change', filterTable);
document.getElementById('menbeVar').addEventListener('change', filterTable);
document.getElementById('menbeYox').addEventListener('change', filterTable);
document.getElementById('menbeSecilmeyib').addEventListener('change', filterTable);
document.getElementById('temirVar').addEventListener('change', filterTable);
document.getElementById('temirYox').addEventListener('change', filterTable);
document.getElementById('hisseVar').addEventListener('change', filterTable);
document.getElementById('hisseYox').addEventListener('change', filterTable);   



                filterTable();
                function filterTable() {
                    var inputDate = document.getElementById('searchDate').value.toUpperCase();
                    var inputHome = document.getElementById('searchHome').value.toUpperCase();
                    var inputErazi = document.getElementById('searchErazi').value.toUpperCase();
                    var inputLayihe = document.getElementById('searchLayihe').value.toUpperCase();
                    var inputLayiheTeyinati = document.getElementById('searchLayiheTeyinati').value.toUpperCase();
                    var inputMtk = document.getElementById('searchMtk').value.toUpperCase();
                    var inputEmlkaSenedi = document.getElementById('searchEmlakSenedi').value.toUpperCase();
                    var inputMertebe = document.getElementById('searchMertebe').value.toUpperCase();
                    var inputOtaqSayiMin = parseInt(document.getElementById('searchOtaqSayiMin').value);
                    var inputOtaqSayiMax = parseInt(document.getElementById('searchOtaqSayiMax').value);
                    var inputSaheMin = parseInt(document.getElementById('searchSaheMin').value);
                    var inputSaheMax = parseInt(document.getElementById('searchSaheMax').value);
                    var inputPriceMin = parseInt(document.getElementById('searchPriceMin').value);
                    var inputPriceMax = parseInt(document.getElementById('searchPriceMax').value);                    
                    var inputOtaqDeyisdirilib = document.getElementById('searchOtaqDeyisdirilib').value.toUpperCase();
                    var inputUnvan = document.getElementById('searchUnvan').value.toUpperCase();
                    var inputTemirTipi = document.getElementById('searchTemirType').value.toUpperCase(); 
                    var inputGas = document.querySelector('input[name="gas"]:checked')?.value.toUpperCase();
                    var inputevEsyalari = document.querySelector('input[name="evEsyalari"]:checked')?.value.toUpperCase();
                    var inputGarage= document.querySelector('input[name="qaraj"]:checked')?.value.toUpperCase();
                    var inputMenbe = document.querySelector('input[name="menbe"]:checked')?.value.toUpperCase();
                    var inputTemir = document.querySelector('input[name="temir"]:checked')?.value.toUpperCase();
                    var inputHisse = document.querySelector('input[name="hisse_hisse"]:checked')?.value.toUpperCase();


                    // Add similar variables for other columns
                
                    var table = document.getElementById('jsonTable');
                    var tr = table.getElementsByTagName('tr');
                
                    for (var i = 0; i < tr.length; i++) {
                        var tdDate = tr[i].getElementsByTagName('td')[0];
                        var tdHome = tr[i].getElementsByTagName('td')[1];
                        var tdErazi = tr[i].getElementsByTagName('td')[2];
                        var tdLayihe = tr[i].getElementsByTagName('td')[3];
                        var tdLayiheTeyinati = tr[i].getElementsByTagName('td')[4];
                        var tdMtk = tr[i].getElementsByTagName('td')[5];
                        var tdEmlakSenedi = tr[i].getElementsByTagName('td')[6];
                        var tdMertebe = tr[i].getElementsByTagName('td')[7];
                        var tdOtaqSayi = tr[i].getElementsByTagName('td')[8];
                        var tdOtaqDeyisdirilib = tr[i].getElementsByTagName('td')[9];
                        var tdUnvan = tr[i].getElementsByTagName('td')[11];
                        var tdTemirTipi = tr[i].getElementsByTagName('td')[15];
                        var tdGas = tr[i].getElementsByTagName('td')[16];
                        var tdGarage = tr[i].getElementsByTagName('td')[18];
                        var tdMenbe= tr[i].getElementsByTagName('td')[10];
                        var tdtemir = tr[i].getElementsByTagName('td')[14];

                        var tdHisse = tr[i].getElementsByTagName('td')[26];



                        var tdEvesyalar = tr[i].getElementsByTagName('td')[17];


                        var tdSahe = tr[i].getElementsByTagName('td')[19];
                        var tdPrice = tr[i].getElementsByTagName('td')[25];

                        // Add similar variables for other columns
                
                        if (tdDate && tdHome && tdErazi && tdLayihe && tdLayiheTeyinati && tdMtk && tdEmlakSenedi && tdMertebe && tdOtaqSayi && tdOtaqDeyisdirilib &&tdMenbe &&tdUnvan &&tdTemirTipi && tdGas && tdGarage && tdEvesyalar &&tdtemir && tdHisse && tdSahe && tdPrice /* && other td variables */) {
                            var dateMatch = tdDate.textContent || tdDate.innerText;
                            var homeMatch = tdHome.textContent || tdHome.innerText;
                            var EraziMatch = tdErazi.textContent || tdErazi.innerText;
                            var layiheMatch = tdLayihe.textContent || tdLayihe.innerText;
                            var layiheTeyinatiMatch = tdLayiheTeyinati.textContent || tdLayiheTeyinati.innerText;
                            var mtkMatch = tdMtk.textContent || tdMtk.innerText;
                            var EmlakSenediMatch = tdEmlakSenedi.textContent || tdEmlakSenedi.innerText;
                            var mertebeMatch = tdMertebe.textContent || tdMertebe.innerText;
                            var otaqSayiMatch = parseInt(tdOtaqSayi.textContent || tdOtaqSayi.innerText);
                            var otaqDeyisdirilibMatch = tdOtaqDeyisdirilib.textContent || otaqDeyisdirilibField.innerText;

                            var unvanMatch = tdUnvan.textContent || tdUnvan.innerText;
                            var temirTipiMatch = tdTemirTipi.textContent || tdTemirTipi.innerText;
                            var garageMatch = tdGarage.textContent || tdGarage.innerText;
                            var menbeMatch =tdMenbe.textContent || tdMenbe.innerText;
                            var evEsyalariMatch = tdEvesyalar.textContent || tdEvesyalar.innerText;
                            var gasMatch = tdGas.textContent || tdGas.innerText;
                            var saheMatch = parseInt(tdSahe.textContent || tdSahe.innerText);
                            var priceMatch = parseInt(tdPrice.textContent || tdPrice.innerText);
                            var temirMatch = tdtemir.textContent || tdtemir.innerText;
                            var hisseMatch = tdHisse.textContent || tdHisse.innerText;



                            var tdHome = tr[i].getElementsByTagName('td')[0];
                            var tdDate = tr[i].getElementsByTagName('td')[1];
                            var tdErazi = tr[i].getElementsByTagName('td')[2];
                            var tdLayihe = tr[i].getElementsByTagName('td')[3];
                            var tdLayiheTeyinati = tr[i].getElementsByTagName('td')[4];
                            var tdMtk = tr[i].getElementsByTagName('td')[5];
                            var tdEmlakSenedi = tr[i].getElementsByTagName('td')[6];
                            var tdMertebe = tr[i].getElementsByTagName('td')[7];                            
                            var tdOtaqSayi = tr[i].getElementsByTagName('td')[8];
                            var tdOtaqDeyisdirilib = tr[i].getElementsByTagName('td')[9];
                            var tdUnvan = tr[i].getElementsByTagName('td')[11];
                            var tdTemirTipi = tr[i].getElementsByTagName('td')[15];
                            var tdEvesyalar = tr[i].getElementsByTagName('td')[17];
                            var tdtemir = tr[i].getElementsByTagName('td')[14];
                            var tdHisse = tr[i].getElementsByTagName('td')[26];

                            var tdGas = tr[i].getElementsByTagName('td')[16];
                            var tdGarage = tr[i].getElementsByTagName('td')[18];
                            var tdMenbe = tr[i].getElementsByTagName('td')[10];
                            var tdSahe = tr[i].getElementsByTagName('td')[19];
                            var tdPrice = tr[i].getElementsByTagName('td')[25];
                       






                            // Add similar variables for other columns
                            var otaqSayiInRange = (!isNaN(inputOtaqSayiMin) ? otaqSayiMatch >= inputOtaqSayiMin : true) &&
                            (!isNaN(inputOtaqSayiMax) ? otaqSayiMatch <= inputOtaqSayiMax : true);

                            var saheInRange = (!isNaN(inputSaheMin) ? saheMatch >= inputSaheMin : true) &&
                            (!isNaN(inputSaheMax) ? saheMatch <= inputSaheMax : true);

                            var priceInRange = (!isNaN(inputPriceMin) ? priceMatch >= inputPriceMin : true) &&
                            (!isNaN(inputPriceMax) ? priceMatch <= inputPriceMax : true);

                            var gasMatchCondition = inputGas ? gasMatch.toUpperCase() === inputGas : true;
                            var garageMatchCondition = inputGarage ? garageMatch.toUpperCase() === inputGarage : true;
                            var evEsyalariMatch = inputevEsyalari ? evEsyalariMatch.toUpperCase() === inputevEsyalari : true;
                            var menbeMatch = inputMenbe ? menbeMatch.toUpperCase() === inputMenbe : true;
                            var temirMatch = inputTemir ? temirMatch.toUpperCase() === inputTemir : true;
                            var hisseMatch = inputHisse ? hisseMatch.toUpperCase() === inputHisse : true;






                            if (dateMatch.toUpperCase().indexOf(inputDate) > -1 &&
                                homeMatch.toUpperCase().indexOf(inputHome) > -1 &&
                                EraziMatch.toUpperCase().indexOf(inputErazi) > -1 &&
                                layiheMatch.toUpperCase().indexOf(inputLayihe) > -1 &&
                                layiheTeyinatiMatch.toUpperCase().indexOf(inputLayiheTeyinati) > -1 &&
                                mtkMatch.toUpperCase().indexOf(inputMtk) > -1 &&
                                EmlakSenediMatch.toUpperCase().indexOf(inputEmlkaSenedi) > -1 &&
                                mertebeMatch.toUpperCase().indexOf(inputMertebe) > -1 &&
                                otaqSayiInRange &&
                                otaqDeyisdirilibMatch.toUpperCase().indexOf(inputOtaqDeyisdirilib) > -1 &&
                                unvanMatch.toUpperCase().indexOf(inputUnvan) > -1  &&
                                gasMatchCondition &&
                                evEsyalariMatch &&
                                garageMatchCondition &&
                                temirMatch &&
                                hisseMatch &&
                                menbeMatch &&
                                saheInRange &&
                                priceInRange &&
                                temirTipiMatch.toUpperCase().indexOf(inputTemirTipi) > -1 




                                 /* && other conditions */) {
                                tr[i].style.display = ''; // Show matching rows
                            } else {
                                tr[i].style.display = 'none'; // Hide non-matching rows
                            }
                        }
                    }
                }

                // Define an array of field descriptors
                const fields = [
                    { element: menbeField.radios, valueSpan: menbeField.valueSpan, userProperty: 'melumatinMenbesi',cell:menbeCell },

                    { element: qazField.radios, valueSpan: qazField.valueSpan, userProperty: 'gas', cell:gasCell },
                    { select: eraziField.select, valueSpan: eraziField.valueSpan, userProperty: 'address' },
                    { select: deaktiveField.select, valueSpan: deaktiveField.valueSpan, userProperty: 'deaktiv' },
                    {select: updateDateField.select,valueSpan: updateDateField.valueSpan, userProperty: 'updatedDate'},
                    {select:saleDateField.select,valueSpan:saleDateField.valueSpan,userProperty:'saleDate'},
                    { select: emlakTypeField.select, valueSpan: emlakTypeField.valueSpan, userProperty: 'emlakTypeId' },
                    { select: emlakinSenediField.select, valueSpan : emlakinSenediField.valueSpan,userProperty: 'emlakSenedId'},
    { select: layiheField.select, valueSpan: layiheField.valueSpan, userProperty: 'layiheId' },
    { select: mtkField.select, valueSpan: mtkField.valueSpan, userProperty: 'mtkId' },
    { select: layiheTeyinatiField.select, valueSpan: layiheTeyinatiField.valueSpan, userProperty: 'layiheTeyinatiId' },
    { select: umumiMertebeField.select, valueSpan: umumiMertebeField.valueSpan, userProperty: 'umumiMertebe' },
    { select: otaqSayiField.select, valueSpan: otaqSayiField.valueSpan, userProperty: 'otaqSayi' },
    { select: otaqDeyisdirilibField.select, valueSpan: otaqDeyisdirilibField.valueSpan, userProperty: 'otaqDeyismeId' },
    { select: saytAdiField.select, valueSpan: saytAdiField.valueSpan, userProperty: 'saytAdi' },
    { input: saytIdField.input, valueSpan: saytIdField.valueSpan, userProperty: 'saytId' },
    { select: torpaqSahesiField.select, valueSpan: torpaqSahesiField.valueSpan, userProperty: 'torpaqSahesi' },
    { select: saheField.select, valueSpan: saheField.valueSpan, userProperty: 'sahe' },
    { element: evEsyalariField.radios, valueSpan: evEsyalariField.valueSpan, userProperty: 'evEsyalari' ,cell: evEsyalariCell },
    { element: qarajField.radios, valueSpan: qarajField.valueSpan, userProperty: 'qaraj',cell: garageCell },
    { element: temirField.radios, valueSpan: temirField.valueSpan, userProperty: 'isTemir' ,cell:temirCell},
    { select: temirTypeField.select, valueSpan: temirTypeField.valueSpan, userProperty: 'temirTypeId' },
    { select: mertebeField.select, valueSpan: mertebeField.valueSpan, userProperty: 'mertebeNomresi' },
    { select: agentField.select, valueSpan: agentField.valueSpan, userProperty: 'agentId' },
    { select: noteField.select, valueSpan: noteField.valueSpan, userProperty: 'note' },
    { element: isEcslusiveField.radios, valueSpan: isEcslusiveField.valueSpan, userProperty: 'isEkskluziv',cell:isEkskluciveCell },
    { select: unvanField.select, valueSpan:unvanField.valueSpan, userProperty:'locationId'},
    { element: partialPayField.radios, valueSpan: partialPayField.valueSpan, userProperty: 'isHisseHisse' ,cell:partionCell },
    { input: ilkinOdenisField.input, valueSpan: ilkinOdenisField.valueSpan, userProperty: 'ilkinOdenis' },
    { input: ayliqOdenisField.input, valueSpan: ayliqOdenisField.valueSpan, userProperty: 'ayliqOdenis' },
    { select: serviceField.select, valueSpan: serviceField.valueSpan, userProperty: 'serviceFeeId' },
    { input: qiymetField.input, valueSpan: qiymetField.valueSpan, userProperty: 'price' },
    { select: deleteReasonNoteField.select, valueSpan: deleteReasonNoteField.valueSpan, userProperty: 'deleteReasonNote' },
    { select: filialField.select, valueSpan: filialField.valueSpan, userProperty: 'branchId' },
    { select: creditExistField.select, valueSpan: creditExistField.valueSpan, userProperty: 'creditVar' },
    { select: creditIdField.select, valueSpan: creditIdField.valueSpan, userProperty: 'creditId' },
    { select: creditDateField.select, valueSpan: creditDateField.valueSpan, userProperty: 'creditMuddeti' },
    { select: createdDateField.select, valueSpan: createdDateField.valueSpan, userProperty: 'createdDate' },
    { select: deleteDateField.select, valueSpan: deleteDateField.valueSpan, userProperty: 'deleteDate' },
    { select: upDateUserIdField.select, valueSpan: upDateUserIdField.valueSpan, userProperty: 'updatedUserId' }
];


// Row click event listener
row.addEventListener('click', function () {
    const allRows = document.querySelectorAll('#tableBody tr');
    allRows.forEach(row => {
        row.classList.remove('highlight');
    });
    row.classList.add('highlight'); // 'row' is implicitly referenced here

    // Update fields based on user data
    fields.forEach(field => {
    if (field.select) {
        field.select.value = user[field.userProperty];
        console.log(`Updated select ${field.userProperty} to ${user[field.userProperty]}`);

        if (field.valueSpan) {
            field.valueSpan.textContent = user[field.userProperty];
        }
    } else if (field.input) {
        field.input.value = user[field.userProperty];
        console.log(`Updated input ${field.userProperty} to ${user[field.userProperty]}`);
        if (field.valueSpan) {
            field.valueSpan.textContent = user[field.userProperty];
        }
    }
    else if (field.element) {
        // Handle updating radio button fields if needed
    }
    });
    // fields.forEach(field =>{
    //     if(field.input){
    //         field.input.placeholder =user[field.userProperty];
    //         if (field.valueSpan){
    //             field.valueSpan.textContent = user[field.userProperty];

    //         }
    //     }
    // })
    
    fields.forEach(field => {
        if (field.element) {
            console.log(`Processing field: ${field.userProperty}`);
    
            const radios = field.element.querySelectorAll('input[type="radio"]');
            radios.forEach(radio => {
                console.log(`Radio value: ${radio.value}, User property value: ${user[field.userProperty]}`);
                radio.checked = radio.value === user[field.userProperty];
    
                radio.onchange = () => {
                    console.log(`Radio ${radio.value} selected`);
    
                    // Update the value of the user object
                    user[field.userProperty] = radio.value;
    
                    // Ensure only the relevant cell is updated
                    if (field.cell) {
                        console.log(`Updating cell with value: ${radio.value}`);
                        field.cell.textContent = radio.value;
                    } else {
                        console.error(`field.cell is not defined or not a DOM element`);
                    }
    
                    if (field.valueSpan) {
                        console.log(`Updating valueSpan with value: ${radio.value}`);
                        field.valueSpan.textContent = radio.value;
                    }
                };
    
                // Initialize the valueSpan if it exists
                if (field.valueSpan) {
                    field.valueSpan.textContent = user[field.userProperty]; // Use textContent to set text
                }
            });
        }
    });
    
                    // Define the updateUserAndCell function
function updateUserAndCell(selectElement, cell, userProperty, valueSpan = null) {
   if (selectElement) {
    selectElement.onchange = function() {
        user[userProperty] = selectElement.value;
        cell.textContent = selectElement.value;
        if (valueSpan) {
            valueSpan.textContent = selectElement.value;
        }
    };
} else {
    console.error('selectElement is undefined:', selectElement);
}
}
function updateInputCell(input, cell , userProperty, valueSpan =null){
    if(input){
        input.onchange =function() {
            user[userProperty] = input.value;
            cell.textContent = input.value;
            if(valueSpan){
                valueSpan.textContent=input.value
            }
        }
    }
}
updateInputCell(ayliqOdenisField.input, ayliqOdenisCell, 'ayliqOdenis' ,ayliqOdenisField.valueSpan);
updateInputCell(ilkinOdenisField.input, ilkinOdenisCell,'ilkinOdenis' ,ilkinOdenisField.valueSpan);
updateInputCell(qiymetField.input, priceCell, 'Qiymət' ,qiymetField.valueSpan);
updateInputCell(saytIdField.input, saytIdCell,'Sayt İd' ,saytIdField.valueSpan);


// Define the setupFieldHandler function
function setupFieldHandler(selectElement, cell, userProperty, valueSpan = null) {
    updateUserAndCell(selectElement, cell, userProperty, valueSpan);
}
                    
                    // Example usage for each field
                    // setupFieldHandler()
                    // setupFieldHandler
                    // setupFieldHandler
                    // setupFieldHandler
                    // setupFieldHandler
                    // setupFieldHandler
                    // setupFieldHandler
                    // setupFieldHandler
                    // setupFieldHandler
                    // setupFieldHandler(emlakTypeField.select, emlakCell, 'emlakTypeId', emlakTypeField.valueSpan);
                    // setupFieldHandler(serviceField.select, serviceCell, 'serviceFeeId');
                    // setupFieldHandler(deaktiveField.select, deaktivCell, 'deaktiv', deaktiveField.valueSpan);
                    // setupFieldHandler(eraziField.select, eraziCell, 'address', eraziField.valueSpan);
                    // setupFieldHandler(ilkinOdenisField.select, ilkinOdenisCell, 'ilkinOdenis', ilkinOdenisField.valueSpan);
                   setupFieldHandler(emlakinSenediField.select ,emlakinSenediCell, 'emlakSenedId', emlakinSenediField.valueSpan)
                    setupFieldHandler(emlakTypeField.select, emlakCell, 'emlakTypeId', emlakTypeField.valueSpan);
setupFieldHandler(serviceField.select, serviceCell, 'serviceFeeId');
setupFieldHandler(deaktiveField.select, deaktivCell, 'deaktiv', deaktiveField.valueSpan);
setupFieldHandler(eraziField.select, eraziCell, 'address', eraziField.valueSpan);
// setupFieldHandler(ilkinOdenisField.select, ilkinOdenisCell, 'ilkinOdenis', ilkinOdenisField.valueSpan);
setupFieldHandler(layiheField.select, layiheCell, 'layiheId', layiheField.valueSpan);
setupFieldHandler(layiheTeyinatiField.select, layihe_teyinatiCell, 'layiheTeyinatiId', layiheTeyinatiField.valueSpan);
setupFieldHandler(otaqSayiField.select, otaq_sayiCell, 'otaqSayi', otaqSayiField.valueSpan);
setupFieldHandler(createdDateField.select, createdDateCell, 'createdDate' , createdDateField.valueSpan);
setupFieldHandler(mtkField.select, mtkCell, 'mtkId', mtkField.valueSpan);
setupFieldHandler(otaqDeyisdirilibField.select, otaq_deyisdirilibCell, 'otaqDeyismeId', otaqDeyisdirilibField.valueSpan);
// setupFieldHandler(menbeField.radios, menbeCell, 'melumatinMenbesi', menbeField.valueSpan);
setupFieldHandler(saleDateField.select,salesDateCell,'saleDate',saleDateField.valueSpan);

setupFieldHandler(saytAdiField.select, saytAdiCell, 'saytAdi', saytAdiField.valueSpan);
// setupFieldHandler(saytIdField.select, saytIdCell, 'saytId', saytIdField.valueSpan);
setupFieldHandler(torpaqSahesiField.select, torpaqSahesiCell, 'torpaqSahesi', torpaqSahesiField.valueSpan);
setupFieldHandler(saheField.select, saheCell, 'sahe', saheField.valueSpan);
// setupFieldHandler(evEsyalariField.radios, evEsyalariCell, 'evEsyalari', evEsyalariField.valueSpan);
// setupFieldHandler(qarajField.radios, garageCell, 'qaraj', qarajField.valueSpan);
// setupFieldHandler(qazField.radios,gasCell,'qaz',qazField.valueSpan);
setupFieldHandler(temirTypeField.select, temirTypeCell, 'temirTypeId', temirTypeField.valueSpan);
setupFieldHandler(temirField.radios, temirCell, 'address', temirField.valueSpan);
setupFieldHandler(mertebeField.select, mertebeNomresiCell, 'mertebeNomresi', mertebeField.valueSpan);
setupFieldHandler(umumiMertebeField.select, umumiMertebeCell, 'umumiMertebe', umumiMertebeField.valueSpan);
setupFieldHandler(agentField.select, agentIdCell, 'agentId', agentField.valueSpan);
setupFieldHandler(noteField.select, noteCell, 'note', noteField.valueSpan);
setupFieldHandler(unvanField.select,unvanCell, 'locationId', unvanField.valueSpan);
setupFieldHandler(isEcslusiveField.radios, isEkskluciveCell, 'isEkskluziv', isEcslusiveField.valueSpan);
setupFieldHandler(partialPayField.radios, partionCell, 'isHisseHisse', partialPayField.valueSpan);
// setupFieldHandler(ayliqOdenisField.select, ayliqOdenisCell, 'ayliqOdenis', ayliqOdenisField.valueSpan);
setupFieldHandler(creditExistField.select, creditExistsCell, 'creditVar', creditExistField.valueSpan);
setupFieldHandler(creditIdField.select, creditIdCell, 'creditId', creditIdField.valueSpan);
// setupFieldHandler(creditDateField.select, creditMuddetiCell, 'creditMuddeti', creditDateField.valueSpan);
setupFieldHandler(updateDateField.select, yenilenmeTarixiCell, 'updatedDate', updateDateField.valueSpan);
setupFieldHandler(upDateUserIdField.select, updatedUserIdCell, 'updatedUserId', upDateUserIdField.valueSpan)
setupFieldHandler(deleteDateField.select, deleteDateCell, 'deleteDate', deleteDateField.valueSpan);
setupFieldHandler(deleteReasonNoteField.select, deleteReasonNoteCell, 'deleteReasonNote', deleteReasonNoteField.valueSpan);
setupFieldHandler(filialField.select, branchIdCell, 'branchId', filialField.valueSpan);
                    
                });
                // const radioButtons = document.getElementsByName('optionGroup');
//     radioButtons.forEach(radio => {
//         radio.addEventListener('change', function() {
//             fields.forEach(field => {
//                 if (field.element instanceof NodeList) { // Check if it is a radio button group
//                     appendRadioField(container, 'images/example-image.jpg', 'Radio Field', field);
//                 } else { // It is a select field
//                     appendField(container, 'images/example-image.jpg', 'Select Field', field);
//                 }
//             });
        
//             // Add event listeners to update the field value if needed
//             fields.forEach(field => {
//                 if (field.element instanceof NodeList) { // Check if it is a radio button group
//                     field.element.forEach(radio => {
//                         radio.addEventListener('change', function() {
//                             const selectedRadio = document.querySelector(`input[name="${radio.name}"]:checked`);
//                             if (selectedRadio) {
//                                 field.valueSpan.textContent = selectedRadio.value;
//                             }
//                         });
//                     });
//                 } else { // It is a select field
//                     field.element.addEventListener('change', function() {
//                         field.valueSpan.textContent = field.element.value;
//                     });
//                 }
        
//     });
// //                 applySelectBoxStyles(eraziSelect);
// //     applySelectBoxStyles(layiheSelect);
// //     applySelectBoxStyles(mtkSelect);
// //     applySelectBoxStyles(layiheTeyinatiField.select);
// //     applySelectBoxStyles(otaqSayiField.select);
// //     applySelectBoxStyles(saytAdiSelect);
// //     applySelectBoxStyles(saytIdSelect);
// //     applySelectBoxStyles(otaqDeyisdirilibField.select);
// //     applySelectBoxStyles(menbeField.select);
// //     applySelectBoxStyles(torpaqSahesiField.select);
// //     applySelectBoxStyles(saheSelect);
// //     applySelectBoxStyles(umumiMertebeField.select);
// //     applySelectBoxStyles(evEsyalariField.select);
// //     applySelectBoxStyles(qarajSelect);
// //     applySelectBoxStyles(gasSelect);
// //     applySelectBoxStyles(temirSelect);
// //     applySelectBoxStyles(temirTypeField.select);
// //     applySelectBoxStyles(agentField.select);
// //     applySelectBoxStyles(noteField.select);
// //     applySelectBoxStyles(eksclusiveSelect);
// //     applySelectBoxStyles(partialSelect);
// //     applySelectBoxStyles(mertebeField.select);
// //     applySelectBoxStyles(ilkinOdenisField.select);
// //     applySelectBoxStyles(ayliqOdenisField.select);
// //     applySelectBoxStyles(serviceField.select);
// //     applySelectBoxStyles(qiymetField.select);
// //     applySelectBoxStyles(qeydinSilinmeSebebiSelect);
// //     applySelectBoxStyles(filialField.select);
// //     applySelectBoxStyles(createExistSelect);
// //     applySelectBoxStyles(creditDateField.select);
// //     applySelectBoxStyles(emlakinTipiSelect);
// //     applySelectBoxStyles(emlakinSenediField.select);


// //     applySelectBoxStyles(creditExistField.select);
// //     applySelectBoxStyles(creditIdField.select);
// //     applySelectBoxStyles(createdDateField.select);

// //     applySelectBoxStyles(updateDateField.select);
// //     applySelectBoxStyles(deleteDateField.select);
// //     applySelectBoxStyles(updateDateField.select);
// //     applySelectBoxStyles(deaktiveField.select);
// //     applySelectBoxStyles(upDateUserIdField.select);








// // });

// // function applySelectBoxStyles(selectElement) {
// //     selectElement.style.paddingLeft = '13px';
// //     selectElement.style.paddingRight = '13px';
// //     selectElement.style.paddingTop ='3px';
// //     selectElement.style.paddingBottom ='3px';
// //     selectElement.style.outline= 'none';
// //     selectElement.style.fontSize = '16px';
// //     selectElement.style.border = '1px solid #ccc';
// //     selectElement.style.borderRadius = '2px';
// //     selectElement.style.backgroundColor = '#grey';
// //     selectElement.style.width = '17%';
// //             };
//         });
//     });
});
        });
    });
