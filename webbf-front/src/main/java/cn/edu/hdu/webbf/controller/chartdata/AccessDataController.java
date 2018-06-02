/*
 * File Name: LifeService.java
 * Copyright: Copyright 2016-2016 hdu All Rights Reserved.

 * Description:
 * Author: Pi Chen
 * Create Date: 2016年11月2日

 * Modifier: Pi Chen
 * Modify Date: 2016年11月2日
 * Bugzilla Id:
 * Modify Content:
 */
package cn.edu.hdu.webbf.controller.chartdata;

import cn.edu.hdu.webbf.common.base.BaseController;
import cn.edu.hdu.webbf.common.constant.BFConstant;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

/**
 * 图表数据：访问来源
 *
 */
@RestController
@RequestMapping(value = "/addatas")
public class AccessDataController extends BaseController
{

    /**
     * 曲线图数据模拟 ，一般是从数据库获取的，这里直接模拟产生
     *
     * @return
     */
    @RequestMapping(method = RequestMethod.GET,  produces = "application/json; charset=utf-8")
//    public ResponseEntity<Map<String, Object>> getAdData(@RequestParam(value = "num") int num,@RequestParam(value = "data") int data)
    public ResponseEntity<Map<String, Object>> getAdData()

    {
        System.out.println(BFConstant.HELLO_MSG);
        Map<String, Object> map = new HashMap<String, Object>();
        List<Integer> emailList = new ArrayList<Integer>();
        List<Integer> allianceList = new ArrayList<Integer>();
        List<Integer> vedioList = new ArrayList<Integer>();
        List<Integer> directList = new ArrayList<Integer>();
        List<Integer> searchList = new ArrayList<Integer>();
        List<String> xTitleList = new ArrayList<String>();
        Random r = new Random();
        // 模拟产生数据，实际应用中请调用service获取
        for (int i = 0; i < 300; i++)
        {
            emailList.add(r.nextInt(200));
            allianceList.add(r.nextInt(200));
            vedioList.add(r.nextInt(200));
            directList.add(r.nextInt(200));
            searchList.add(r.nextInt(200));
            xTitleList.add(i + "m");
        }
        map.put("emailList", emailList);
        map.put("allianceList", allianceList);
        map.put("vedioList", vedioList);
        map.put("directList", directList);
        map.put("searchList", searchList);
        map.put("xTitleList", xTitleList);
        return new ResponseEntity<Map<String, Object>>(map, HttpStatus.OK);
    }
}
