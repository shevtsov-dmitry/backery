package com.burgershop.website;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class Main {

    @GetMapping
    public String showMainForm(){
        return "index";
    }

    @GetMapping("/showDiffHtml")
    public String showDiffHtml(){
        return "html\\myLovelyHtml";
    }
}
