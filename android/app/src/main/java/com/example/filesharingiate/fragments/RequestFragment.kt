package com.example.filesharingiate.fragments

import android.media.Image
import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import androidx.core.content.ContextCompat
import androidx.recyclerview.widget.LinearLayoutManager
import com.example.filesharingiate.R
import com.example.filesharingiate.models.ItemModels
import kotlinx.android.synthetic.main.fragment_home.*
import kotlinx.android.synthetic.main.fragment_request.*

class RequestFragment : Fragment() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
    }

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {

        return inflater.inflate(R.layout.fragment_request, container, false)
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        var adapter:ItemAdapter?

        rv_recyclerView.layoutManager = LinearLayoutManager(context)

        adapter = ItemAdapter(context, com.example.filesharingiate.models.items)
        rv_recyclerView.adapter = adapter
    }

    companion object {
        @JvmStatic
        fun newInstance() : RequestFragment {
            return RequestFragment()
        }
    }
}