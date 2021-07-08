package com.example.filesharingiate

import android.graphics.Color
import android.graphics.Typeface
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.text.InputType
import android.util.TypedValue
import android.widget.EditText
import android.widget.ImageView
import android.widget.LinearLayout
import android.widget.TextView
import com.example.filesharingiate.models.IFClistObj

class formActivity : AppCompatActivity() {

    private val titleView : TextView = findViewById(R.id.af_title)
    private val imageView : ImageView = findViewById(R.id.af_image)
    private val descriptionView : TextView = findViewById(R.id.af_description)

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_form)

        configureView()
    }

    fun configureView() {
        val title = intent.getSerializableExtra("title") as String?
        val description = intent.getSerializableExtra("description") as String?
        val image = intent.getSerializableExtra("image") as Int
        val compList = intent.getSerializableExtra("compList") as IFClistObj

        imageView.setImageResource(image)
        titleView.text = title
        descriptionView.text = description

        val container : LinearLayout = findViewById(R.id.af_list)

        for (comp in compList.cList){
            val textView = TextView(this)
            textView.layoutParams = LinearLayout.LayoutParams(
                    LinearLayout.LayoutParams.MATCH_PARENT,
                    LinearLayout.LayoutParams.WRAP_CONTENT
            )
            textView.setPadding(0,16,0,8)
            textView.setTextSize(TypedValue.COMPLEX_UNIT_SP, 20F);
            textView.typeface = Typeface.DEFAULT_BOLD;
            textView.setTextColor(Color.parseColor("#FF272729"))
            textView.text = comp.cName
            container.addView(textView)

            when(comp.cType){
                "EditText" -> {
                    val editText = EditText(this)
                    editText.layoutParams = LinearLayout.LayoutParams(
                            LinearLayout.LayoutParams.MATCH_PARENT,
                            LinearLayout.LayoutParams.WRAP_CONTENT
                    )
                    editText.setPadding(0,8,0,8)
                    editText.isSingleLine = true
                    editText.hint = comp.cHint
                    container.addView(editText)
                }
                "EditTextPhone" -> {
                    val editText = EditText(this)
                    editText.layoutParams = LinearLayout.LayoutParams(
                            LinearLayout.LayoutParams.MATCH_PARENT,
                            LinearLayout.LayoutParams.WRAP_CONTENT
                    )
                    editText.setPadding(0,8,0,8)
                    editText.isSingleLine = true
                    editText.hint = comp.cHint
                    editText.inputType = InputType.TYPE_CLASS_PHONE
                    container.addView(editText)
                }
            }
        }
    }

}