const docx = require('docx')
const fs = require('fs')

class CreateDocument {
    create(fullname, groupname,coursenum,phonenumber, costof ,reasonfor ,datefor ,numofreas){
        console.log("s")
        console.log(fullname, groupname,coursenum,phonenumber, costof ,reasonfor ,datefor ,numofreas)
        const doc = new docx.Document({
            sections: [
                {
                    children: [
                        new docx.Paragraph({
                            text:"В стипендиальную комиссию ИАТЭ НИЯУ МИФИ",
                            font: "Times New Roman",
                            alignment: docx.AlignmentType.RIGHT
                        }),
                        new docx.Paragraph({
                            children: [
                                new docx.TextRun("от студента(ки) курса" ),
                                new docx.TextRun({text: coursenum}),
                                new docx.TextRun("\tгруппы"),
                                new docx.TextRun({text: groupname})
                            ],
                            font: "Times New Roman",
                            
                            alignment: docx.AlignmentType.RIGHT
                        }),
                        new docx.Paragraph({
                            text: fullname,
                            font: "Times New Roman",
                            alignment: docx.AlignmentType.RIGHT
                        }),
                        new docx.Paragraph({
                            children: [
                                new docx.TextRun("Моб. тел. " ),
                                new docx.TextRun({text: phonenumber})
                            ],
                            font: "Times New Roman",
                            alignment: docx.AlignmentType.RIGHT
                        }),
                        new docx.Paragraph({
                            text: "ЗАЯВЛЕНИЕ",
                            font: "Times New Roman",
                            bold: true,
                            alignment: docx.AlignmentType.CENTER
                        }),
                        new docx.Paragraph({
                            text: "Прошу оказать мне материальную поддержку в ",
                            font: "Times New Roman",
                            alignment: docx.AlignmentType.JUSTIFIED // КРАСНАЯ СТРОКА?
                        }),
                        new docx.Paragraph({
                            children: [
                                new docx.TextRun("в размере " ),
                                new docx.TextRun({text: costof}),
                                new docx.TextRun("\tрублей")
                            ],
                            font: "Times New Roman",
                            alignment: docx.AlignmentType.LEFT
                        }),
                        new docx.Paragraph({
                            children: [
                                new docx.TextRun("в связи " ),
                                new docx.TextRun({text: reasonfor})
                            ],
                            font: "Times New Roman",
                            alignment: docx.AlignmentType.LEFT
                        }),
                        new docx.Paragraph({
                            children: [
                                new docx.TextRun("Дата" ),
                                new docx.TextRun({text: datefor})
                            ],
                            font: "Times New Roman",
                            alignment: docx.AlignmentType.LEFT
                        }),
                        new docx.Paragraph({
                            children: [
                                new docx.TextRun("Ходатайствую по существу заявления в соответствии с п.п " ),
                                new docx.TextRun({text: numofreas}),
                                new docx.TextRun("\tПоложения о ")
                        ],
                        font: "Times New Roman",
                        alignment: docx.AlignmentType.LEFT
                    })
 
                    ]
                }
            ]
        })
 
        console.log("2")
        docx.Packer.toBuffer(doc).then((buffer) => {
            fs.writeFileSync("My Document.docx", buffer);
        });
 
        const file = fs.readFileSync("My Document.docx")
        return file
 
    }
}
 
module.exports = new CreateDocument()