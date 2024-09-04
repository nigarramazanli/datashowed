document.addEventListener("DOMContentLoaded", function () {
    const tableBody = document.getElementById('tableBody');
    const selectedRowBody = document.getElementById('selectedRowBody');

    const selectedRowBodyDivs = document.createElement('div');

    
    function createField(labelText, selectId, options) {
        const fieldLabel = document.createElement('label');
        fieldLabel.textContent = labelText + ': ';
        selectedRowBodyDivs.appendChild(fieldLabel);

        const fieldSelect = document.createElement('select');
        fieldSelect.id = selectId;
        options.forEach(optionValue => {
            const option = document.createElement('option');
            option.value = optionValue;
            option.textContent = optionValue;
            fieldSelect.appendChild(option);
        });
        selectedRowBodyDivs.appendChild(fieldSelect);

        const fieldValue = document.createElement('span');
        selectedRowBodyDivs.appendChild(fieldValue);
        selectedRowBody.appendChild(selectedRowBodyDivs);
        selectedRowBodyDivs.appendChild(document.createElement('br'));
        return { select: fieldSelect, valueSpan: fieldValue };
    }

    const eraziField = createField('Ərazi', 'eraziSelect', ["Bakixanov", "Sumqayit", "Elmler", "Yasamal", "Insaatcilar"]);
    const layiheField = createField('Layihə', 'layiheSelect', [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const mtkField = createField('Mtk', 'mtkSelect', ["Yasamal Mtk", "Saray Mtk","Elmler Mtk"]);
    const layiheTeyinatiField= createField('Layihə Təyinatı' , 'layiheTeyinatiSelect' , [1,2,3,4,5,6]);
    const emlakTypeField=createField('Əmlakın Sənədi','emlakinTipiSelect',[1,2,3,4,5,6,7,13]);
    const mertebeField=createField('Mərtəbə', 'mertebeSelect', [1,2,3,4,5,6,7,8,9,10,11,12,13]);
    const umumiMertebeField=createField('Ümumi Mərtəbə' , 'umumiMertebeSelect',[1,2,3]);
    const otaqSayiField=createField('Otaq Sayı' , 'otaqsayiSelect',[3,4,5,13]);
    const otaqDeyisdirilibField=createField('Otaq Dəyişdirilib', 'otaqDeyisdirilibSelect',["Bəli", "Xeyr"]);
    const menbeField= createField('Mənbə','menbeSelect',["Bina.az","Emlak.az","Real Əmlak"]);
    const saytAdiField=createField('Sayt Adı', 'saytAdiSelect', ["Real Emlak","Bina.az","Emlak.az"]);
    const saytIdField=createField('Sayt Id','saytIdSelect',[1,2,3,4,5,6,7,8]);
    const torpaqSahesiField= createField('Torpaq Sahəsi' , 'torpaqSahesiSelect' , [1,2,3,4,5,6]);
    const saheField=createField('Sahə','saheSelect',[1,2,3,4,5,6,7]);
    const evEsyalariField=createField('Ev Əşyaları' ,'evEsyalariSelect' , ["Var", "Yoxdur"]);
    const qarajField=createField('Qaraj', 'qarajSelect',["Var","Yoxdur"]);
    const gasField=createField('Qaz', 'gasSelect',["Var","Yoxdur"]);
    const temirField=createField('Təmir', 'temirSelect',["Var","Yoxdur"]);
    const temirTypeField=createField('Təmir Tipi', 'temirTypeSelect',["Var","Yoxdur"]);
    const mertebenomresiField=createField('Mərtəbə Nömrəsi', 'mertebeNomresiSelect',["Var","Yoxdur"]);
    const agentField=createField('Agent', 'agentSelect',["Var","Yoxdur"]);
    const noteField=createField('Qeyd', 'noteSelect',["Var","Yoxdur"]);
    const isEcslusiveField=createField('Eksluziv Olması', 'eksclusiveSelect',["Var","Yoxdur"]);
    const partialPayField=createField('Hissə-Hissə ödəmə', 'partialSelect',["Var","Yoxdur"]);
    const ilkinOdenisField=createField('Ilkin ödəniş', 'ilkinOdenisSelect',["Var","Yoxdur"]);
    const ayliqOdenisField=createField('Aylıq ödəniş', 'ayliqOdenisSelect',["Var","Yoxdur"]);
    const serviceField=createField('Servis Haqqı', 'serviceSelect',["Var","Yoxdur"]);
    const qiymetField=createField('Qiymət ', 'qiymetSelect',["Var","Yoxdur"]);
    const deleteReasonNoteField=createField('Qeydin Silinmə Səbəbi ', 'qeydinSilinmeSebebiSelect',["Var","Yoxdur"]);
    const filialField=createField('Filial', 'filialSelect',["Var","Yoxdur"]);
    const creditExistField=createField('Credit Mövcudluğu', 'createExistSelect', ["Olar","Olmaz"]);
    const creditIdField=createField('Kredit Id','creditSelect',[1,2,3,4,5]);
    const creditDateField=createField('Kredit Müddəti','creditDateSelect',["08.03.2024"]);
    const createdDateField=createField('Yaranma Tarixi','createdTimeSelect',[1,2,3,4,5,6,7,8])
    const updateDateField=createField('Yenilənmə Tarixi', 'updateDateSelect',["16.07.2024"]);
    const deleteDateField=createField('Silinmə Tarixi','deleteDateSelect',[1,2,3,4,5]);
    const upDateUserIdField=createField('Yenilənən User İd' ,'upDateUserIdSelect',[1,2,3,4,5]);
    const deaktiveField=createField('Deaktiv', 'deaktiveSelect',["Var","Yoxdur"]);














    fetch("http://10.10.88.251:2040/Sale/All") 
        .then(response => response.json())
        .then(data => {
            data.forEach(user => {
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
                                    
                const mertebeCell = document.createElement('td');
                mertebeCell.textContent = user.mertebeNomresi;
                row.appendChild(mertebeCell);
                const otaq_sayiCell = document.createElement('td');
                otaq_sayiCell.textContent = user.otaqSayi;
                row.appendChild(otaq_sayiCell);
                const otaq_deyisdirilibCell = document.createElement('td');
                otaq_deyisdirilibCell.textContent = user.otaqDeyismeId;
                row.appendChild(otaq_deyisdirilibCell);
                const menbeCell = document.createElement('td');
                menbeCell.textContent = user.melumatinMenbesi;
                row.appendChild(menbeCell);
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
            const mektebNomresiCell=document.createElement('td');
            mektebNomresiCell.textContent=user.mertebeNomresi;
            row.appendChild(mektebNomresiCell);
            const agentIdCell=document.createElement('td');
            agentIdCell.textContent=user.agentId;
            row.appendChild(agentIdCell);
          
            const noteCell=document.createElement('td');
            noteCell.textContent=user.note;
            row.appendChild(noteCell);
            const isEkskluciveCell =document.createElement('td');
            isEkskluciveCell.textContent=user.isEkskluziv;
            row.appendChild(isEkskluciveCell);
            
            const serviceCell=document.createElement('td');
            serviceCell.textContent=user.serviceFeeId;
            row.appendChild(serviceCell);
            const partionCell =document.createElement('td');
            partionCell.textContent=user.isHisseHisse;
            row.appendChild(partionCell);
            const deaktivCell=document.createElement('td');
            deaktivCell.textContent=user.deaktiv;
            row.appendChild(deaktivCell);
            const priceCell =document.createElement('td');
            priceCell.textContent=user.price;
            row.appendChild(priceCell);
            const ilkinOdenisCell=document.createElement('td');
            ilkinOdenisCell.textContent=user.ilkinOdenis;
            row.appendChild(deaktivCell);
            const ayliqOdenisCell=document.createElement('td');
            ayliqOdenisCell.textContent=user.ayliqOdenis;
            row.appendChild(ayliqOdenisCell);
            const creditExistsCell=document.createElement('td');
            creditExistsCell.textContent=user.creditVar;
            row.appendChild(creditExistsCell);
            const creditIdCell =document.createElement('td');
            creditIdCell.textContent=user.creditId;
            row.appendChild(creditIdCell);
            const creditMuddetiCell =document.createElement('td');
            creditMuddetiCell.textContent=user.creditMuddeti;
            row.appendChild(creditMuddetiCell);
            const creditDateCell =document.createElement('td');
            creditDateCell.textContent=user.createdDate;
            row.appendChild(creditDateCell);
            const yenilenmeTarixiCell =document.createElement('td');
            yenilenmeTarixiCell.textContent=user.updatedDate;
            row.appendChild(yenilenmeTarixiCell);
            const  deleteDateCell=document.createElement('td');
            deleteDateCell.textContent=user.deleteDate;
            row.appendChild(deleteDateCell);
            const salesDateCell=document.createElement('td');
            salesDateCell.textContent=user.salesDateCell;
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
                

                tableBody.appendChild(row);                

                // Define an array of field descriptors
const fields = [
    { select: eraziField.select, valueSpan: eraziField.valueSpan, userProperty: 'address' },
    { select: deaktiveField.select, valueSpan: deaktiveField.valueSpan, userProperty: 'deaktiv' },
    { select: emlakTypeField.select, valueSpan: emlakTypeField.valueSpan, userProperty: 'emlakTypeId' },
    { select: layiheField.select, valueSpan: layiheField.valueSpan, userProperty: 'layiheId' },
    { select: mtkField.select, valueSpan: mtkField.valueSpan, userProperty: 'mtkId' },
    { select: layiheTeyinatiField.select, valueSpan: layiheTeyinatiField.valueSpan, userProperty: 'layiheTeyinatiId' },
    { select: mertebeField.select, valueSpan: mertebeField.valueSpan, userProperty: 'mertebeNomresi' },
    { select: umumiMertebeField.select, valueSpan: umumiMertebeField.valueSpan, userProperty: 'umumiMertebe' },
    { select: otaqSayiField.select, valueSpan: otaqSayiField.valueSpan, userProperty: 'otaqSayi' },
    { select: otaqDeyisdirilibField.select, valueSpan: otaqDeyisdirilibField.valueSpan, userProperty: 'otaqDeyismeId' },
    { select: menbeField.select, valueSpan: menbeField.valueSpan, userProperty: 'melumatinMenbesi' },
    { select: saytAdiField.select, valueSpan: saytAdiField.valueSpan, userProperty: 'saytAdi' },
    { select: saytIdField.select, valueSpan: saytIdField.valueSpan, userProperty: 'saytId' },
    { select: torpaqSahesiField.select, valueSpan: torpaqSahesiField.valueSpan, userProperty: 'torpaqSahesi' },
    { select: saheField.select, valueSpan: saheField.valueSpan, userProperty: 'sahe' },
    { select: evEsyalariField.select, valueSpan: evEsyalariField.valueSpan, userProperty: 'evEsyalari' },
    { select: qarajField.select, valueSpan: qarajField.valueSpan, userProperty: 'qaraj' },
    { select: gasField.select, valueSpan: gasField.valueSpan, userProperty: 'gas' },
    { select: temirField.select, valueSpan: temirField.valueSpan, userProperty: 'isTemir' },
    { select: temirTypeField.select, valueSpan: temirTypeField.valueSpan, userProperty: 'temirTypeId' },
    { select: mertebenomresiField.select, valueSpan: mertebenomresiField.valueSpan, userProperty: 'mertebeNomresi' },
    { select: agentField.select, valueSpan: agentField.valueSpan, userProperty: 'agentId' },
    { select: noteField.select, valueSpan: noteField.valueSpan, userProperty: 'note' },
    { select: isEcslusiveField.select, valueSpan: isEcslusiveField.valueSpan, userProperty: 'isEkskluziv' },
    { select: partialPayField.select, valueSpan: partialPayField.valueSpan, userProperty: 'isHisseHisse' },
    { select: ilkinOdenisField.select, valueSpan: ilkinOdenisField.valueSpan, userProperty: 'ilkinOdenis' },
    { select: ayliqOdenisField.select, valueSpan: ayliqOdenisField.valueSpan, userProperty: 'ayliqOdenis' },
    { select: serviceField.select, valueSpan: serviceField.valueSpan, userProperty: 'serviceFeeId' },
    { select: qiymetField.select, valueSpan: qiymetField.valueSpan, userProperty: 'price' },
    { select: deleteReasonNoteField.select, valueSpan: deleteReasonNoteField.valueSpan, userProperty: 'deleteReasonNote' },
    { select: filialField.select, valueSpan: filialField.valueSpan, userProperty: 'branchId' },
    { select: creditExistField.select, valueSpan: creditExistField.valueSpan, userProperty: 'creditVar' },
    { select: creditIdField.select, valueSpan: creditIdField.valueSpan, userProperty: 'creditId' },
    { select: creditDateField.select, valueSpan: creditDateField.valueSpan, userProperty: 'creditMuddeti' },
    { select: createdDateField.select, valueSpan: createdDateField.valueSpan, userProperty: 'createdUserId' },
    { select: deleteDateField.select, valueSpan: deleteDateField.valueSpan, userProperty: 'deleteDate' },
    { select: upDateUserIdField.select, valueSpan: upDateUserIdField.valueSpan, userProperty: 'updatedUserId' }
];

// Row click event listener
row.addEventListener('click', function () {
    const allRows = document.querySelectorAll('#tableBody tr');
    allRows.forEach(row => {
        row.classList.remove('highlight');
    });
    this.classList.add('highlight'); // 'row' is implicitly referenced here

    // Update fields based on user data
    fields.forEach(field => {
        field.select.value = user[field.userProperty];
        if (field.valueSpan) {
            field.valueSpan.textContent = user[field.userProperty];
        }
    });
                    // Define the updateUserAndCell function
function updateUserAndCell(selectElement, cell, userProperty, valueSpan = null) {
    selectElement.onchange = function() {
        user[userProperty] = selectElement.value;
        cell.textContent = selectElement.value;
        if (valueSpan) {
            valueSpan.textContent = selectElement.value;
        }
    };
}

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
                    setupFieldHandler(emlakTypeField.select, emlakCell, 'emlakTypeId', emlakTypeField.valueSpan);
setupFieldHandler(serviceField.select, serviceCell, 'serviceFeeId');
setupFieldHandler(deaktiveField.select, deaktivCell, 'deaktiv', deaktiveField.valueSpan);
setupFieldHandler(eraziField.select, eraziCell, 'address', eraziField.valueSpan);
setupFieldHandler(ilkinOdenisField.select, ilkinOdenisCell, 'ilkinOdenis', ilkinOdenisField.valueSpan);
setupFieldHandler(layiheField.select, layiheCell, 'layiheId', layiheField.valueSpan);
setupFieldHandler(layiheTeyinatiField.select, layihe_teyinatiCell, 'layiheTeyinatiId', layiheTeyinatiField.valueSpan);
setupFieldHandler(otaqSayiField.select, otaq_sayiCell, 'otaqSayi', otaqSayiField.valueSpan);
setupFieldHandler(mtkField.select, mtkCell, 'mtkId', mtkField.valueSpan);
setupFieldHandler(otaqDeyisdirilibField.select, otaq_deyisdirilibCell, 'otaqDeyismeId', otaqDeyisdirilibField.valueSpan);
setupFieldHandler(menbeField.select, menbeCell, 'menbeCell', menbeField.valueSpan);
setupFieldHandler(saytAdiField.select, saytAdiCell, 'saytAdi', saytAdiField.valueSpan);
setupFieldHandler(saytIdField.select, saytIdCell, 'saytId', saytIdField.valueSpan);
setupFieldHandler(torpaqSahesiField.select, torpaqSahesiCell, 'torpaqSahesi', torpaqSahesiField.valueSpan);
setupFieldHandler(saheField.select, saheCell, 'sahe', saheField.valueSpan);
setupFieldHandler(evEsyalariField.select, evEsyalariCell, 'evEsyalari', evEsyalariField.valueSpan);
setupFieldHandler(qarajField.select, garageCell, 'qaraj', qarajField.valueSpan);
setupFieldHandler(temirTypeField.select, temirTypeCell, 'temirTypeId', temirTypeField.valueSpan);
setupFieldHandler(temirField.select, temirCell, 'address', temirField.valueSpan);
setupFieldHandler(gasField.select, gasCell, 'gas', gasField.valueSpan);
setupFieldHandler(mertebenomresiField.select, umumiMertebeCell, 'umumiMertebe', mertebenomresiField.valueSpan);
setupFieldHandler(agentField.select, agentIdCell, 'agentId', agentField.valueSpan);
setupFieldHandler(noteField.select, noteCell, 'note', noteField.valueSpan);
setupFieldHandler(isEcslusiveField.select, isEkskluciveCell, 'isEkskluziv', isEcslusiveField.valueSpan);
setupFieldHandler(partialPayField.select, partionCell, 'isHisseHisse', partialPayField.valueSpan);
setupFieldHandler(ayliqOdenisField.select, ayliqOdenisCell, 'ayliqOdenis', ayliqOdenisField.valueSpan);
setupFieldHandler(creditExistField.select, creditExistsCell, 'creditVar', creditExistField.valueSpan);
setupFieldHandler(creditIdField.select, creditIdCell, 'creditId', creditIdField.valueSpan);
setupFieldHandler(creditDateField.select, creditMuddetiCell, 'creditMuddeti', creditDateField.valueSpan);
setupFieldHandler(updateDateField.select, yenilenmeTarixiCell, 'updatedDate', updateDateField.valueSpan);
setupFieldHandler(deleteDateField.select, deleteDateCell, 'deleteDate', deleteDateField.valueSpan);
setupFieldHandler(deleteReasonNoteField.select, deleteReasonNoteCell, 'deleteReasonNote', deleteReasonNoteField.valueSpan);
setupFieldHandler(filialField.select, branchIdCell, 'branchId', filialField.valueSpan);
                    
                });
            });
        });
    });
    