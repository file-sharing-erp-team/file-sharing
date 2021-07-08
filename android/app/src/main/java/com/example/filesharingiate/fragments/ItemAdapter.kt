package com.example.filesharingiate.fragments

import android.content.Context
import android.content.Intent
import android.os.Parcelable
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.LinearLayout
import android.widget.RelativeLayout
import android.widget.TextView
import androidx.core.content.ContextCompat.startActivity
import androidx.recyclerview.widget.RecyclerView
import com.example.filesharingiate.MainActivity
import com.example.filesharingiate.R
import com.example.filesharingiate.formActivity
import com.example.filesharingiate.models.ItemModels
import java.io.Serializable

class ItemAdapter (val context: Context?, val arr: List<ItemModels>) : RecyclerView.Adapter<ItemHolder>(){
    override fun onBindViewHolder(holder : ItemHolder, current : Int){
        val obj = arr[current]
        holder.title.text = obj.title
        holder.date.text = obj.description
        holder.image.setImageResource(obj.image)
        holder.wrapper.setOnClickListener {
            val formIntent = Intent(context, formActivity::class.java)
            formIntent.putExtra("title",obj.title)
            formIntent.putExtra("description",obj.description)
            formIntent.putExtra("image",obj.image)
            formIntent.putExtra("compList",obj.compList)
            context?.startActivity(formIntent)
        }
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ItemHolder {
        val itemView = LayoutInflater.from(parent.context).inflate(R.layout.item_layout, parent, false)
        return ItemHolder(itemView)
    }

    override fun getItemCount(): Int {
        return arr.size
    }
}

class ItemHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
    val title: TextView = itemView.findViewById(R.id.it_title)
    val date: TextView = itemView.findViewById(R.id.it_description)
    val wrapper: LinearLayout = itemView.findViewById(R.id.rl_wrapper)
    val image: ImageView = itemView.findViewById(R.id.it_image)
}