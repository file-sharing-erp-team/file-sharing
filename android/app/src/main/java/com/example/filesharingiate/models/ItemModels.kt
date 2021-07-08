package com.example.filesharingiate.models

import com.example.filesharingiate.R
import java.io.Serializable

data class ItemModels(
    val title : String,
    val description : String,
    val image: Int,
    val compList: IFClistObj
) : Serializable

data class ItemFormComponent(
    val cName : String,
    val cHint : String,
    val cType : String
) : Serializable

data class IFClistObj(
    val cList: List<ItemFormComponent>
) : Serializable

// Существующие компоненты форм

val ifc_FirstName = ItemFormComponent("Имя", "Введите имя...", "EditText")
val ifc_MiddleName = ItemFormComponent("Отчество", "Введите отчество...", "EditText")
val ifc_LastName = ItemFormComponent("Фамилия", "Введите фамилию...", "EditText")
val ifc_Phone = ItemFormComponent("Телефон", "Введите номер телефона..", "EditTextPhone")
val ifc_StudGroup = ItemFormComponent("Группа", "Введите учебную группу..", "EditText")

// Существующие типы заявлений, которые можно отправить.

val item_1_IFC : IFClistObj = IFClistObj(listOf<ItemFormComponent>(ifc_FirstName, ifc_LastName, ifc_MiddleName, ifc_Phone, ifc_StudGroup))
val item_2_IFC : IFClistObj = IFClistObj(listOf<ItemFormComponent>(ifc_FirstName, ifc_LastName, ifc_MiddleName))


val item_1 : ItemModels = ItemModels(
    "Государственная Социальная Стипендия",
    "\tНазначение государственной социальной стипендии осуществляется"+
            "нуждающимся студентам, среднедушевой доход семьи которых ниже величины прожиточного минимума",
    R.drawable.ic_material_support,
    item_1_IFC
)

val item_2 : ItemModels = ItemModels(
    "Повышенная Государственная Академическая Стипендия",
    "\tНазначение повышенной государственной академической стипендии осуществляется студентам за"+
            "особые достижения в учебной, научно-исследовательской, общественной, культурно-творческой и спортивной деятельности",
    R.drawable.ic__pgas,
    item_2_IFC
)

val items = listOf<ItemModels>( item_1, item_2)
