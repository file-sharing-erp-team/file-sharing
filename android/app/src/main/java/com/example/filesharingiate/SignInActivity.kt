package com.example.filesharingiate

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.TextView
import android.widget.Toast

class SignInActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_sign_in)
    }

    fun onLogin(view: View) {
        val textViewLogin: TextView = findViewById(R.id.si_editText) as TextView
        val textViewPassword: TextView = findViewById(R.id.si_editTextTextPassword) as TextView
        val textLogin: String = textViewLogin.text.toString()
        val textPassword: String = textViewPassword.text.toString()

        //test
        if (textLogin == "fivenation" && textPassword == "12345") {
            val mainIntent = Intent(this, MainActivity::class.java)
            startActivity(mainIntent)
            finish()
        } else {
            val myMessage = Toast.makeText(this, "Ошибка! Неверный логин или пароль!", Toast.LENGTH_SHORT)
            myMessage.show()
        }
    }
}