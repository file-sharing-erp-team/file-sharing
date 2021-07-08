const docx = require('docx')
const fs = require('fs')

class CreateDocument {
    create(coursenum, groupname, fullname, phonenumber,costof,reasonfor,datefor,numofreas){
 
        const doc = new docx.Document({
            sections: [
                {
                    children: [
                        new docx.Paragraph({
                            text:"В стипендиальную комиссию ИАТЭ НИЯУ МИФИ",
                            font: "Times New Roman",
                            alignment: docx.AlignmentType.RIGHT,
                            indent:{left : 224} 
                        }),
                        new docx.Paragraph({
                            children: [
                                 new docx.TextRun("от студента(ки) курса " ),
                                 new docx.TextRun(coursenum),
                                 new docx.TextRun("\tгруппы "),
                                 new docx.TextRun(groupname)
                            ],
                            font: "Times New Roman",
                            alignment: docx.AlignmentType.RIGHT,
                            indent:{left : 224} 
                        }),
                        new docx.Paragraph({
                            text: fullname,
                            font: "Times New Roman",
                            alignment: docx.AlignmentType.RIGHT,
                            indent:{left : 224} 
                        }),
                        new docx.Paragraph({
                            children: [
                                new docx.TextRun("Моб. тел. " ),
                                new docx.TextRun(phonenumber)
                            ],
                            font: "Times New Roman",
                            alignment: docx.AlignmentType.RIGHT,
                            indent: 224
                        }),
                        new docx.Paragraph({
                            children:[
                                new docx.TextRun({
                                    text:"ЗАЯВЛЕНИЕ",
                                    bold: true,
                                    size: 24
                                })                                
                            ],
 
                            font: "Times New Roman",
                            alignment: docx.AlignmentType.CENTER
                        }),
                        new docx.Paragraph({
                            text: "Прошу оказать мне  материальную поддержку в ",
                            font: "Times New Roman",
                            alignment: docx.AlignmentType.LEFT // КРАСНАЯ СТРОКА?
                        }),
                        new docx.Paragraph({
                            children: [
                                new docx.TextRun("в размере " ),
                                new docx.TextRun(costof),
                                new docx.TextRun("\tрублей")
                            ],
                            font: "Times New Roman",
                            alignment: docx.AlignmentType.LEFT
                        }),
                        new docx.Paragraph({
                            children: [
                                 new docx.TextRun("в связи " ),
                                 new docx.TextRun(reasonfor)
                            ],
                            font: "Times New Roman",
                            alignment: docx.AlignmentType.LEFT
                        }),
                        new docx.Paragraph({
                            children: [
                                 new docx.TextRun("Дата " ),
                                 new docx.TextRun(datefor)
                            ],
                            font: "Times New Roman",
                            alignment: docx.AlignmentType.LEFT
                        }),
                        new docx.Paragraph({
                            children: [
                                new docx.TextRun("Ходатайствую по существу заявления в соответствии с п.п " ),
                                new docx.TextRun(numofreas),
                                new docx.TextRun("\tПоложения о ")
                        ],
                        font: "Times New Roman",
                        alignment: docx.AlignmentType.LEFT
                    }),
                    new docx.Paragraph({
                        text: "государственной социальной стипендии, стипендии нуждающимся студентам и социальной  ",
                        font: "Times New Roman",
                        alignment: docx.AlignmentType.LEFT 
                    }),    
                    new docx.Paragraph({
                        text: "поддержке обучающихся  НИЯУ МИФИ ",
                        font: "Times New Roman",
                        alignment: docx.AlignmentType.LEFT 
                    }),    
                    new docx.Paragraph({
                        text: "____________________________________ ",
                        font: "Times New Roman",
                        alignment: docx.AlignmentType.LEFT 
                    }),
                    new docx.Paragraph({
                        text: "____________________________________              ________________________  ____________________",
                        font: "Times New Roman", 
                        alignment: docx.AlignmentType.LEFT 
                    }),
                    new docx.Paragraph({
                        text: "    (должность ходатайствующего)                      (подпись)            (расшифровка подписи)",
                        font: "Times New Roman",
                        alignment: docx.AlignmentType.LEFT 
                    }),
                   new docx.Paragraph({
                        text: "СОГЛАСОВАНО:",
                        font: "Times New Roman",
                        alignment: docx.AlignmentType.LEFT 
                    }),
                    new docx.Paragraph({
                        text: "Заместитель директора                                       _________________________(Е.Г.Чуркин)",
                        font: "Times New Roman",
                        alignment: docx.AlignmentType.LEFT 
                    }),
                    new docx.Paragraph({
                       text: "Председатель ",
                        font: "Times New Roman",
                        alignment: docx.AlignmentType.LEFT 
                    }), 
                    new docx.Paragraph({
                        text: "профсоюзного комитета                                    _________________________(Г.Е. Ткаченко) ",
                        font: "Times New Roman",
                        alignment: docx.AlignmentType.LEFT 
                     }),
                     new docx.Paragraph({
                        text: "Председатель объединенного совета",
                        font: "Times New Roman",
                        alignment: docx.AlignmentType.LEFT 
                     }), 
                     new docx.Paragraph({
                        text: "обучающихся                                             _________________________(________________)",
                        font: "Times New Roman",
                        alignment: docx.AlignmentType.LEFT 
                     }), 
                     new docx.Paragraph({
                        text: "Староста группы                                         _________________________(________________)",
                        font: "Times New Roman",
                        alignment: docx.AlignmentType.LEFT 
                     }),
                     new docx.Paragraph({
                        text: "Заместитель начальника отделения                        _________________________(________________)",
                        font: "Times New Roman",
                        alignment: docx.AlignmentType.LEFT 
                     }),        
                    ]
                }
            ]
        })
 
 
         docx.Packer.toBuffer(doc).then((buffer) => {
            fs.writeFileSync("My Document.docx", buffer);
        });
 
        const file = fs.readFileSync("My Document.docx")
        return file
 
    }
}
 
module.exports = new CreateDocument()