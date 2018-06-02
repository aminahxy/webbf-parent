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
package cn.edu.hdu.webbf.controller.chartdata2;

import cn.edu.hdu.webbf.common.base.BaseController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

/**
 * 图表数据：访问来源
 *
 */
@RestController
@RequestMapping(value = "/addatas2")
//@RequestMapping(value = "/todos")
public class AccessDataController2 extends BaseController {

    /**
     * 曲线图数据模拟 ，一般是从数据库获取的，这里直接模拟产生
     *
     * @return
     */
//    @RequestMapping()
//   @RequestMapping(value = "/todos",method = RequestMethod.GET,  produces = "application/json; charset=utf-8")
//    @RequestMapping(value = "/{item}", method = RequestMethod.GET, produces = "application/json; charset=utf-8")
//    public ResponseEntity<Map<String, Object>> getAdData2(@PathVariable("item") String item)
//    public ResponseEntity<Map<String, Object>> getAdData2(@PathVariable("item") String item)
  /*  public ResponseEntity<Map<String, Object>> getAdData2(@RequestParam(value = "item") String item)
   {
       System.out.println("hahahaha" + item);
       return getPie();
   }*/
    @RequestMapping(value = "/{name}", method = RequestMethod.GET, produces = "application/json; charset=utf-8")
    public ResponseEntity<Map<String, Object>> getPie(@PathVariable("name") String name) {
//    public ResponseEntity<Map<String, Object>> getPie(@RequestParam(value = "name") String name) {
        System.out.println("lalala" + name);
        Map<String, Object> map = new HashMap<String, Object>();
//        if (name.contains("undefined")||name == "" || name == null)
//        if (name.equals("undefined")||name == "" || name == null)
//        {
//            return new ResponseEntity<Map<String, Object>>(map, HttpStatus.OK);
//        }
        /**
         * 解析 name 调用接口
         * name的格式为 <XXX<eee_ewew-ewqeqw::2017-12-12T10:37:40 (:: 分割 服务名和时间 < 需要替换成 /
         * 时间需要将 UTC修改成 时间戳之类的
         */
        List<Integer> emailList = new ArrayList<Integer>();
        List<Integer> allianceList = new ArrayList<Integer>();
        List<Integer> vedioList = new ArrayList<Integer>();
        List<Integer> directList = new ArrayList<Integer>();
        List<Integer> searchList = new ArrayList<Integer>();
        List<String> xTitleList = new ArrayList<String>();
        Random r = new Random();
        // 模拟产生数据，实际应用中请调用service获取
        for (int i = 0; i < 300; i++) {
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
