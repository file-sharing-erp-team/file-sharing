const docx = require('docx')
const fs = require('fs')

class CreateDocument {
    create(fullname, groupname,coursenum,phonenumber, costof ,reasonfor ,datefor ,numofreas){

        const doc = new docx.Document({
            sections: [
                {
                    children: [
                        new docx.Paragraph({
                            text:"В стипендиальную комиссию ИАТЭ НИЯУ МИФИ",
                            font: "Times New Roman",
                            
                            indent: {
                                left: 4480,
                            } 
                        }),
                        new docx.Paragraph({
                            children: [
                                 new docx.TextRun("от студента(ки) курса " ),
                                 new docx.TextRun(coursenum),
                                 new docx.TextRun("\tгруппы "),
                                 new docx.TextRun(groupname)
                            ],
                            font: "Times New Roman",
                            
                            indent: {
                                left: 4480,
                            }
                        }),
                        new docx.Paragraph({
                            text: fullname,
                            font: "Times New Roman",
                            
                            indent: {
                                left: 4480,
                            } 
                        }),
                        new docx.Paragraph({
                            children: [
                                new docx.TextRun("Моб. тел. " ),
                                new docx.TextRun(phonenumber)
                            ],
                            font: "Times New Roman",
                            
                            indent: {
                                left: 4480,
                            }
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
                            spacing: {
                                before: 280,
                                after: 160,
                            },
                            alignment: docx.AlignmentType.CENTER
                        }),
                        new docx.Paragraph({
                            text: "Прошу оказать мне  материальную поддержку в ",
                            font: "Times New Roman",
                            indent: {
                                left: 60,
                            } 
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
                            alignment: docx.AlignmentType.LEFT,
                            spacing: {
                                after: 280,
                            },
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
                        alignment: docx.AlignmentType.LEFT,
                        spacing: {
                            after: 280,
                        }, 
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
                        text: "    (должность ходатайствующего)                               (подпись)            (расшифровка подписи)",
                        font: "Times New Roman",
                        alignment: docx.AlignmentType.LEFT 
                    }),
                   new docx.Paragraph({
                        text: "СОГЛАСОВАНО:",
                        font: "Times New Roman",
                        alignment: docx.AlignmentType.LEFT,
                        spacing: {
                            before: 280,
                        }, 
                    }),
                    new docx.Paragraph({
                        text: "Заместитель директора                                       _________________________(Е.Г.Чуркин)",
                        font: "Times New Roman",
                        alignment: docx.AlignmentType.LEFT,
                        spacing: {
                            after: 160,
                        }, 
                    }),
                    new docx.Paragraph({
                       text: "Председатель ",
                        font: "Times New Roman",
                        alignment: docx.AlignmentType.LEFT,
                         
                    }), 
                    new docx.Paragraph({
                        text: "профсоюзного комитета                                    _________________________(Г.Е. Ткаченко) ",
                        font: "Times New Roman",
                        alignment: docx.AlignmentType.LEFT,
                        spacing: {
                            after: 160,
                        }, 
                     }),
                     new docx.Paragraph({
                        text: "Председатель объединенного совета",
                        font: "Times New Roman",
                        alignment: docx.AlignmentType.LEFT 
                     }), 
                     new docx.Paragraph({
                        text: "обучающихся                                                         _________________________(________________)",
                        font: "Times New Roman",
                        alignment: docx.AlignmentType.LEFT,
                        spacing: {
                            after: 160,
                        },
                     }), 
                     new docx.Paragraph({
                        text: "Староста группы                                                     _________________________(________________)",
                        font: "Times New Roman",
                        alignment: docx.AlignmentType.LEFT,
                        spacing: {
                            after: 160,
                        }, 
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
    
          
         docx.Packer.toBuffer(doc).then(async (buffer) => {
            await fs.writeFileSync(`files/${fullname}_матпомощь.docx`, buffer);
        });
            
        const file = `${fullname}_матпомощь.docx`
        return file
       
    }

    createMoney(coursenum, groupname, fullname,datefor){
        const doc = new docx.Document({
            sections: [
                {
                    children: [
                        new docx.Paragraph({
                            text:"В Стипендиальную комиссию ИАТЭ НИЯУ МИФИ",
                            font: "Times New Roman",
                            spacing: {
                                after: 280,
                            },
 
                            indent: {
                                left: 4480,
                            } 
                        }),
                        new docx.Paragraph({
                            text:"от студента(ки) ",
                            font: "Times New Roman",
                            spacing: {
                                after: 280,
                            },
 
                            indent: {
                                left: 4480,
                            } 
                        }),
                        new docx.Paragraph({
                            text: fullname,
                            font: "Times New Roman",
                            spacing: {
                                after: 280,
                            },
                            indent: {
                                left: 4480,
                            } 
                        }),
                        new docx.Paragraph({
                            children: [
                                 
                                 new docx.TextRun(coursenum),
                                 new docx.TextRun(" курса "),
                                 new docx.TextRun("\tгруппы "),
                                 new docx.TextRun(groupname)
                            ],
                            font: "Times New Roman",
                            spacing: {
                                after: 160,
                            },
 
 
                            indent: {
                                left: 4480,
                            }
                        }),
                        new docx.Paragraph({
                            children:[
                                new docx.TextRun({
                                    text:"ЗАЯВЛЕНИЕ",
                                    bold: false,
                                    size: 24
                                })                                
                            ],
 
                            font: "Times New Roman",
                            alignment: docx.AlignmentType.CENTER
                        }),
                        new docx.Paragraph({
                            text: "Прошу рассмотреть возможность назначения мне в предстоящем семестре повышенной ",
                            font: "Times New Roman",
                            spacing: {
                                after: 60,
                            },
                            indent: {
                                left: 60,
                            } 
                        }),
                        new docx.Paragraph({
                            text: "государственной академической стипендии в соответствии с приказом Министерства образования  ",
                            font: "Times New Roman",
                            spacing: {
                                after: 60,
                            },
                            alignment: docx.AlignmentType.LEFT 
                        }),
                        new docx.Paragraph({
                            text: "и науки РФ от 27 декабря 2016 г. № 1663 ",
                            font: "Times New Roman",
                            spacing: {
                                after: 60,
                            },
                            alignment: docx.AlignmentType.LEFT 
                        }),
                        new docx.Paragraph({
                            children: [
                                 new docx.TextRun("Дата " ),
                                 new docx.TextRun(datefor)
                            ],
                            font: "Times New Roman",
                            alignment: docx.AlignmentType.LEFT,
                            spacing: {
                                after: 160,
                            },
                        }),
                        new docx.Paragraph({
                            text: "_________________________/__________________ ",
                            font: "Times New Roman",
                            spacing: {
                                after: 60,
                            },
                            alignment: docx.AlignmentType.LEFT 
                        }),
                    new docx.Paragraph({
                        text: "Документы, подтверждающие основания для назначения повышенной стипендии прилагаю:  ",
                        font: "Times New Roman",
                        alignment: docx.AlignmentType.LEFT 
                    }),    
 
                    ]
                }
            ]
        })
 
 
         docx.Packer.toBuffer(doc).then((buffer) => {
            fs.writeFileSync(`files/${fullname}_повыш.docx`, buffer);
        });
 
        const file = `${fullname}_повыш.docx`
        return file
    }
}

module.exports = new CreateDocument()