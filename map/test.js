/*
 * this library depend on leafletjs ;
 * this public library
 * */
(function (factory) {
  if (typeof (define) === "Function") {
    define(factory());
  } else {
    var Rtmap = window.Rtmap || {};
    factory(Rtmap);
  }
})(function (_page) {
  var classification = {
    airportpoi: {
      18: "机场相关POI",
      isAirportpoi: function (twoclass) {
        if (!twoclass) {
          return false;
        }
        if (twoclass.toString().indexOf("18") == 0) {
          return true;
        }
        return false;
      }
    },
    restaurantpoi: {
      10: "餐饮相关",
      isRestaurantPoi: function (twoclass) {
        if (!twoclass) {
          return false;
        }
        if (twoclass.toString().indexOf("10") == 0) {
          return true;
        }
        return false;
      }
    },
    businesspoi: { //商业相关
      11: "服饰鞋包",
      12: "购物相关",
      13: "休闲娱乐",
      isBusinessPoi: function (twoclass) {
        if (!twoclass) {
          return false;
        }
        if (twoclass.toString().indexOf("11") == 0 || twoclass.toString().indexOf("12") == 0 || twoclass.toString().indexOf("13") == 0) {
          return true;
        }
        return false;
      }
    },
    travelpoi: { //乘机相关
      180101: "国内乘机手续办理",
      180102: "国际乘机手续办理",
      180201: "安检",
      180301: "登机口",
      180502: "行李提取",
      isTravelPoi: function (twoclass) {
        if (!twoclass) {
          return false;
        }
        if (twoclass.toString().indexOf("180101") == 0 || twoclass.toString().indexOf("180102") == 0 ||
          twoclass.toString().indexOf("180201") == 0 || twoclass.toString().indexOf("180301") == 0 ||
          twoclass.toString().indexOf("180502") == 0) {
          return true;
        }
        return false;
      }
    },
    zoomHash: {
      15: [],
      16: [190206, 200000, 190500, 190501],
      17: [190206, 180301, 180402, 180201, 180101, 200000, 190500, 190501],
      18: [190206, 1801, 1802, 1803, 1804, 200000, 190500, 190501],
      19: [190206, 18, 10, 11, 12, 13, 14, 15, 200000, 190500, 190501]
    },
    //小图标与文字
    twoClassHash: {
      //电话机
      //150704: "./public/img/tel.png",
      //乘机相关
      //180101: "./public/img/fly.png",
      //180102: "./public/img/fly.png",
      //180103: "./public/img/fly.png",
      //180104: "./public/img/fly.png",
      //180105: "./public/img/fly.png",
      //180106: "./public/img/fly.png",
      //180107: "./public/img/fly.png",
      //180108: "./public/img/fly.png",
      //180109: "./public/img/fly.png",
      //安检海关
      //180201: "./public/img/security.png",
      //180202: "./public/img/customs.png",
      //候机登机
      180301: "./public/img/boarding.png",
      //中转到达
      180402: "./public/img/arrive.png",
      //
      //190101: "./public/img/wc.png",
      //190201: "./public/img/elevator.png",
      //190202: "./public/img/escalator.png",
      //190203: "./public/img/stairway.png",
      190206: "./public/img/doorway.png",
      //190303: "./public/img/power.png",
      190401: "./public/img/information_desk.png",
      190402: "./public/img/information_desk.png",
      //购物相关
      //10: "./public/img/restaurant.png",
      //11: "./public/img/clothstore.png",
      //12: "./public/img/supermarket.png"
    },
    //小图标
    smallIconHash: {
      //电话机
      150704: "./public/img/tel.png",
      //卫生门
      190101: "./public/img/wc.png",
      190201: "./public/img/elevator.png",
      190202: "./public/img/escalator.png",
      190203: "./public/img/stairway_new.png",
      //190206: "./public/img/doorway.png",
      190303: "./public/img/power.png",
      190500: "./public/img/reservationcenter.png", //订房中心
      190501: "./public/img/boardingpoint.png" //上车点
    },
    //大图标
    largeIconHash: {
      180101: "./public/img/checkin.png",
      180102: "./public/img/checkin.png",
      180103: "./public/img/checkin.png",
      180104: "./public/img/checkin.png",
      180105: "./public/img/checkin.png",
      180106: "./public/img/fly.png",
      180107: "./public/img/fly.png",
      180108: "./public/img/fly.png",
      180109: "./public/img/ticket.png",
      180201: "./public/img/security.png",
      180202: "./public/img/customs.png",
      180203: "./public/img/borderdefence.png",
      180204: "./public/img/quarantine.png",
      180401: "./public/img/transfer.png",
      180501: "./public/img/luggageelated.png",
      180502: "./public/img/luggageclaim.png",
      180503: "./public/img/luggageelated.png",
      180505: "./public/img/luggageelated.png",
      200105: "./public/img/ticket.png",
      190500: "./public/img/reservationcenter.png", //订房中心
      190501: "./public/img/boardingpoint.png" //上车点
    },
    getLayerStyle: function (layer) {
      var f = layer.feature;
      var poiStyle = f.properties.style;
      //乘机相关换成黄底
      if (Rtmap.Classification.travelpoi.isTravelPoi(f.properties.two_class)) {
        return {
          type: 5, //poi
          fillColor: "#e8c377", //填充颜色
          color: "#af7d0c", //边框颜色
          weight: 0.5, //边框宽度
          opacity: 1, //边框透明度
          fillOpacity: 1 //填充透明度,
        };
      }
      //机场相关POI
      else if (Rtmap.Classification.airportpoi.isAirportpoi(f.properties.two_class)) {
        return {
          type: 5,
          fillColor: "#d0dee2",
          color: "#8eadc1",
          weight: 0.5,
          opacity: 1,
          fillOpacity: 1
        };
      }
      //商业相关POI
      else if (Rtmap.Classification.businesspoi.isBusinessPoi(f.properties.two_class)) {
        return {
          type: 5,
          fillColor: "#d8e0ca",
          color: "#97a869",
          weight: 0.5,
          opacity: 1,
          fillOpacity: 1
        };
      }
      //餐饮相关POI
      else if (Rtmap.Classification.restaurantpoi.isRestaurantPoi(f.properties.two_class)) {
        return ({
          type: 5,
          fillColor: "#efe5ce",
          color: "#c9a659",
          weight: 0.5,
          opacity: 1,
          fillOpacity: 1
        });
      } else {
        return Rtmap.Style.getStyleByPoiType(poiStyle);
      }
    },
    isFirstShow: function (twoclass) {
      if (twoclass.toString().indexOf("190500") == 0 || twoclass.toString().indexOf("190501") == 0) {
        return true;
      }
      return false;
    }
  };

  _page.Classification = (function () {
    function _proto(callback) {
      var res = callback();
      for (var key in res) {
        this[key] = res[key];
      }
    }
    _proto.prototype.getURLData = function (name) {
      var search = location.search;
      var start = search.indexOf(name);
      var end = search.indexOf("&", start) != -1 ? search.indexOf("&", start) : search.length;
      return search.substring(start, end).split("=")[1];
    };
    _proto.prototype.filter = function (name) {
      var search = location.search;
      var start = search.indexOf(name);
      var end = search.indexOf("&", start) != -1 ? search.indexOf("&", start) : search.length;
      var val = search.substring(start, end).split("=");
      return val[1];
    };
    _proto.prototype.isFirstShow = function (twoclass) {
      if (twoclass.toString().indexOf("190500") == 0 || twoclass.toString().indexOf("190501") == 0) {
        return true;
      }
      return false;
    };
    _proto.prototype.customization = "true"; //_proto.prototype.getURLData("customization");

    _proto.prototype.getLayerStyle = function (layer) {
      var f = layer.feature;
      var style = null;
      if (_proto.prototype.customization == "true" && Rtmap.Classification.render.indexOf("RTMAP_MAP_COLOR_CONFIG_CLASSIFY") != "-1") {
        if (f.properties.two_class.toString() != "") {
          for (var key in Rtmap.Classification.RTMAP_MAP_COLOR_CONFIG_CLASSIFY) {
            if (f.properties.two_class == key) {
              style = Rtmap.Classification.RTMAP_MAP_COLOR_CONFIG_CLASSIFY[key];
            } else if (f.properties.two_class.toString().substr(0, 4) == key) {
              style = Rtmap.Classification.RTMAP_MAP_COLOR_CONFIG_CLASSIFY[key];
            } else if (f.properties.two_class.toString().substr(0, 2) == key) {
              style = Rtmap.Classification.RTMAP_MAP_COLOR_CONFIG_CLASSIFY[key];
            }
          }
        }
      }
      if (style == null) {
        for (var i = 0; i < Rtmap.Classification.RTMAP_MAP_COLOR_CONFIG_STYLE.length; i++) {
          if (Rtmap.Classification.RTMAP_MAP_COLOR_CONFIG_STYLE[i].type.toString() == f.properties.style.toString()) {
            style = Rtmap.Classification.RTMAP_MAP_COLOR_CONFIG_STYLE[i];
          }
        }
        if (style == null) {
          console.log(1);
        }
      }
      return style;
    };

    return new _proto(function () {
      if (_proto.prototype.customization == "true") {
        var result = {};
        $.ajax({
          url: _proto.prototype.getURLData("buildid") + "_config.json",
          async: false,
          dataType: "text",
          success: function (data) {
            try {
              result = JSON.parse(data);
              result.customization = "true";
            } catch (e) {
              console.log("配置文件数据异常，请检查并保证是正常的JSON数据格式");
              result = classification;
              result.customization = "false";
            }
          },
          error: function (e) {
            console.log(e.status + "\n" + e.statusText + "\n" + "使用默认方案");
            result = classification;
            result.customization = "false";
          }
        });
        return result;
      } else {
        return classification;
      }
    });
  })();

  /* 初期化label的一些事件和属性 绑定在原型链上 */
  var Label = L.Layer.extend({
    //includes: L.Mixin.Events,
    initialize: function ( /*LatLng*/ latLng, /*String*/ label, options, /*Num*/ type) {
      this._latlng = latLng;
      this._text = label;
      this.type = type;
      L.Util.setOptions(this, options);
    },

    options: {
      offset: new L.Point(0, 2)
    },

    rePosition: function (x, y) {
      var _options = {
        offset: new L.Point(x, y)
      };
      L.Util.setOptions(this, _options);
    },

    moveToCenter: function () {
      this.getSize();
      var offsetX = this._size.width;
      var offsetY = this._size.height;
      if (this.haveIcon) { //只包含icon时,此标识已过期，为兼容老代码保留
        this.rePosition(-offsetX / 2, offsetY / 2);
      } else if ($(this._container).find("img").length) { //anJ
        if (this._iconStyle == "smallIconWithText") {
          this.rePosition(-11, offsetY / 2);
        } else if (this._iconStyle == "largeIconWithText") {
          this.rePosition(-11, offsetY / 2);
        } else if (this._iconStyle == "smallIcon") {
          this.rePosition(-11, offsetY / 2);
        } else {
          this.rePosition(-7.5, offsetY / 2);
        }
      } else {
        this.rePosition(-offsetX / 2, offsetY / 2);
      }
      this._reset();
    },

    getCenterPoint: function () {
      if (this._iconStyle == "smallIconWithText") {
        return new L.Point(this._pos.x + this.getSize().width / 2, this._pos.y);
      }
      if (this._iconStyle == "largeIconWithText") {
        return new L.Point(this._pos.x + this.getSize().width / 2, this._pos.y);
      }
      if (this._iconStyle == "smallIcon") {
        return this._pos;;
      }
      return this._pos;
    },

    getSize: function () {
      if (!this._size) {
        var labelWidth = this._container.clientWidth;
        var labelHeight = this._container.clientHeight;
        this._size = {
          width: labelWidth,
          height: labelHeight,
          padding_left: 0
        }
      }
      return this._size;
    },

    getEvents: function () {
      var events = {
        zoom: this._reset,
        viewreset: this._reset,
        moveend: this._reset,
      };

      return events;
    },

    onAdd: function (map) {
      this._map = map;
      if (!this._container) {
        this._initLayout();
      }
      map.getPanes().overlayPane.appendChild(this._container);
      var haveImage = Rtmap.Style.getImageConfig(this.two_class); //this._text
      if (haveImage) {
        this.haveIcon = true;
        this._text = null;
        this._container.innerHTML = '<img src="' + haveImage + '" width="18px" height="18px">';
      } else {
        this.haveIcon = false;
        this._container.innerHTML = this._text;
      }

      map.on('viewreset', this._reset, this);
      this._reset();
    },

    onRemove: function (map) {
      map.getPanes().overlayPane.removeChild(this._container);
      map.off('viewreset', this._reset, this);
    },

    _reset: function () {
      var pos = this._map.latLngToLayerPoint(this._latlng);
      this._pos = pos;
      var op = new L.Point(pos.x + this.options.offset.x, pos.y - this.options.offset.y);
      L.DomUtil.setPosition(this._container, op);
    },

    addClass: function (className) {
      $(this._container).addClass(className);
    },

    _initLayout: function () {
      if (_page.Config.getOption().PoiStart) {
        //this.star=_page.Config.getOption().PoiStart[this.class_extension];
        this.star = _page.Config.getOption().PoiStart[this._text] || 0;
      } else {
        this.star = 0;
      }
      this._container = L.DomUtil.create('div', 'rtmap_room_name');
      if (_page.Config.getOption().showIcon) {
        var poiClass = _page.Config.getOption().PoiClass[this.class_extension];
        if (poiClass) {
          this.haveIcon = true;
          $(this._container).addClass(poiClass);
        }
      }
      var font_color = _page.Style.getGlobalConfig("font_color");
      if (font_color) {
        $(this._container).css({
          color: font_color
        });
      }
    },

    //图标样式
    _iconStyle: "none",

    //为每个label存一个私有属性，存的是当前layer的
    _nowLayer: null,

    //设置显示样式
    setDisplayStyle: function () {
      if (_page.Config.getOption().largeScene && _page.Config.getOption().loadModel == "cdn") {
        this.filterByZoom(this._map.getZoom());
      }
      /* 二级分类显示 */
      /* end */
      if (_page.Config.getOption().labelStyle != "circle-point") {
        this._iconStyle = "none";
        this.moveToCenter();
        return;
      }
      if (this.two_class) {
        if (classification.twoClassHash[this.two_class]) {
          //图标加文字
          var str = "<img src=" + classification.twoClassHash[this.two_class] + " width='24px'/>" + this._container.textContent;
          this._container.innerHTML = str;
          this._iconStyle = "smallIconWithText";
        } else if (classification.largeIconHash[this.two_class]) {
          //使用大图标加文字
          this._container.innerHTML = '<img src="' + classification.largeIconHash[this.two_class] + '" width="24px" height="24px" style="position: absolute;" >' + '<div>' + this._text + '</div>';
          this._iconStyle = "largeIconWithText";
        } else if (classification.smallIconHash[this.two_class]) {
          //使用小图标(无文字)
          this._container.innerHTML = '<img src="' + classification.smallIconHash[this.two_class] + '" width="22px" height="22px">';
          this._iconStyle = "smallIcon";
        }
      }
      this.moveToCenter();
    },
    //根据配置的比例尺过滤
    filterByZoom: function (zoom) {
      var getClass = classification.zoomHash[zoom];
      if (getClass) {
        var needShow = false;
        if (this.two_class) {
          var classify = this.two_class.toString();
          for (var i = 0; i < getClass.length; i++) {

            if (classify.indexOf(getClass[i]) == 0) {
              needShow = true;
              break;
            }
          }
        }
        if (needShow) {
          this.iconLabelShow();
        } else {
          this.iconLabelHide();
        }
      } else {
        this.iconLabelShow();
      }
    },

    _labelHideStatus: false,

    iconLabelHide: function () {
      this._labelHideStatus = true;
    },

    iconLabelShow: function () {
      this._labelHideStatus = false;
    },

    _geoBound: null,
    //获取边框范围(用于空间检索与标注避让范围调试用)
    getBounds: function () {
      //if (this.testRect) {
      //    Rtmap.Scene.getMap().removeLayer(this.testRect);
      //    this.testRect = null;
      //    this._geoBound = null;
      //}
      if (!this._geoBound) {
        var centerPos = this.getCenterPoint();
        var labelWidth = this._container.clientWidth;
        var labelHeight = this._container.clientHeight;
        var labelBoundsSW = this._map.layerPointToLatLng([centerPos.x - labelWidth / 2, centerPos.y - labelHeight / 2]);
        var labelBoundsNE = this._map.layerPointToLatLng([centerPos.x + labelWidth / 2, centerPos.y + labelHeight / 2]);
        this._geoBound = L.latLngBounds(labelBoundsSW, labelBoundsNE);
        //this.testRect = L.rectangle([labelBoundsSW, labelBoundsNE], { color: "#ff7800", weight: 1 }).addTo(Rtmap.Scene.getMap());
      }
      return this._geoBound;
    },

    setZoomVisble: function (zoom, visble) {
      var zoomProp = "zoom" + zoom + "visble";
      this[zoomProp] = visble;
    },

    getZoomVisble: function (zoom) {
      var zoomProp = "zoom" + zoom + "visble";
      return this[zoomProp];
    },
    setLabelFontColor: function (color) {
      $(this._container).css({
        color: color
      });
    }
  });

  _page.Control = (function () {
    var resultListData = null;
    var markers = [];
    var marker = null;
    var backAction = null;
    var clearOld = true;
    var searchVal = null;

    var _localControl = null;

    var SearchModel = (function () {
      var searchControl = null;
      var searchPageIndex = 1;
      var responsePageCount;
      var currentSearchPoi = null; //
      var searchConstructor = L.Control.extend({
        option: {
          position: "topright"
        },
        bindEvent: function () {
          var self = this;
          var d = this.html;
          $(d).find(".searchBtn").click(function (event) {
            event.stopPropagation();
            _triggerEvent("searchBtn", [event]);
            searchVal = $(d).find(".searchInput").val().trim();
            responsePageCount = null;
            clearOld = true;
            searchPageIndex = 1;
            ajax_search();
          });

          $(d).find(".back").click(function (event) {
            event.stopPropagation();
            backAction ? backAction() : "";
          });
          Rtmap.Scene.on("mapDrag", function () {
            $(d).find(".searchInput").blur();
          });
          Rtmap.Scene.on("mapAction", function () {
            //$(d).find(".categoryList").slideUp();
            //跟随模式下，不响应操作
            if (window.locationModel != "follow") {
              $(d).find(".category_box").slideUp();
            }
          });
          Rtmap.Scene.on("poiClick", function (data, layer) {
            $(d).find(".searchInput").blur();
            //$(d).find(".categoryList").slideUp();
            $(d).find(".category_box").slideUp();
          });

          /*
          $(d).find(".searchInput").keyup(function (event) {
              event.stopPropagation();
              if ($(d).find(".searchInput").val().length > 0) {
                  $(d).find(".clearInput").show();
                  $(d).find(".searchHistoryBox").hide();
              } else {
                  $(d).find(".clearInput").hide();
                  if (getHistorys().length > 0) {
                      $(d).find(".searchHistoryBox").show();
                  }
              };
              //if (event.keyCode == "13") {
                  searchVal = $(d).find(".searchInput").val().trim();
                  responsePageCount = null;
                  clearOld = true;
                  searchPageIndex = 1;
                  ajax_search();
              //}
          });
          */
          //IOS下keyup不响应问题
          $(d).find(".searchInput").on('input', function () {
            event.stopPropagation();
            if ($(d).find(".searchInput").val().length > 0) {
              $(d).find(".clearInput").show();
              $(d).find(".searchHistoryBox").hide();
            } else {
              $(d).find(".clearInput").hide();
              if (getHistorys().length > 0) {
                $(d).find(".searchHistoryBox").show();
              }
            };
            //if (event.keyCode == "13") {
            searchVal = $(d).find(".searchInput").val().trim();
            responsePageCount = null;
            clearOld = true;
            searchPageIndex = 1;
            ajax_search();
            //}
          })

          $(d).find(".searchInput").click(function (event) {
            event.stopPropagation();
          });
          $(d).find(".clearInput").click(function (event) {
            event.stopPropagation();
            _clearSearchResult();
          });

          $(d).find(".categoryBtn").click(function (event) {
            event.stopPropagation();
            $(d).find(".searchInput").blur();
            //$(d).find(".categoryList").slideToggle();
            $(d).find(".category_box").slideToggle();
            _triggerEvent("categoryBtn", [event]);
          });

          $(d).find(".categoryList li").click(function (event) {
            event.stopPropagation();
            searchVal = $(this).attr("searchData");
            _clearResultList();
            //anj
            twoClassSearch("category", $(this));
            //ajax_search("category", $(this).attr("class"));//category可以不用写
            _clearResultList();
            //$(d).find(".categoryList").slideUp();
            $(d).find(".category_box").slideUp();
          });

          $(d).find(".clearHistoryBtn").click(function () {
            clearHistorys();
          });

          $(d).find(".clearHistoryBtn").bind("touchstart", function () {
            event.stopPropagation();
            clearHistorys();
          });

          $(d).find(".searchInput").bind("touchstart", function (event) {
            event.stopPropagation();
          });


          $(d).find(".searchInput").focus(function (event) {
            if (!$(this).val()) {
              setTimeout(function () {
                showHistory();
              }, 200);
            }
            //$(d).find(".categoryList").slideUp();
            $(d).find(".category_box").slideUp();
            _triggerEvent("searchFocus", [event]);
          });

          $(d).find(".slideupHistoryBtn").bind("touchstart", function (event) {
            event.stopPropagation();
            event.preventDefault();
            $(d).find(".searchInput").blur();
          });

          $(d).find(".searchInput").blur(function (event) {
            setTimeout(function () {
              $(d).find(".searchHistoryBox").hide();
            }, 200);
          });

          $(d).find(".searchBtn").bind("touchstart", function (event) {
            event.stopPropagation();
            _triggerEvent("searchBtn", [event]);
            searchVal = $(d).find(".searchInput").val().trim();
            ajax_search();
          });
          $(d).find(".resultListBox").bind("mousewheel", function () {
            event.stopPropagation();
          });
          $(d).find(".resultListBox").bind("touchstart", function () {
            event.stopPropagation();
          });
          $(d).find(".resultListBox").bind("touchmove", function () {
            event.stopPropagation();
          });
          $(d).find(".resultListBox").bind("touchend", function () {
            event.stopPropagation();
          });
          $(d).find(".resultListBox ul").scroll(function (e) {
            event.stopPropagation();
            var h = $(this).height();
            if (this.scrollHeight == h + this.scrollTop) {
              if (!this.bottomAlert) {
                $(this).append(this.bottomAlert);
              }
              searchPageIndex++;
              clearOld = false;
              if (searchPageIndex <= responsePageCount) //
                ajax_search();
            }
          });

          function showHistory() {
            var ul = $("<ul/>");
            var ary = getHistorys();
            if (ary.length < 1) {
              $(d).find(".searchHistoryBox").hide();
              return;
            }
            for (i = ary.length - 1; i > -1; i--) {
              var text = ary[i];
              var li = $("<li/>", {
                text: text,
                "class": "history_item"
              });
              ul.append(li);
              li.click(function () {
                searchVal = $(this).text();
                $(d).find(".searchInput").blur();
                _clearResultList();
                $(d).find(".searchInput").val(searchVal);
                $(d).find(".clearInput").show();
                ajax_search();
              });
            }
            $(d).find(".searchHistoryBox ul").remove();
            $(d).find(".searchHistoryBox").show().prepend(ul);
          }

          function showResultList(data) {
            var listBox = $(d).find(".resultListBox");
            listBox.show();
            var ul = listBox.find("ul");
            if (clearOld) {
              ul.html("");
              ul[0].scrollTop = 0;
            };
            for (var i = 0; i < data.length; i++) {
              var li = $("<li/>", {});
              var str = '<span class="poi_name">' + data[i].name + '</span>' +
                '<span class="floor">' + _page.Config.getFloorAliasName(data[i].floor) + '</span>';
              li.append(str);
              ul.append(li);
              bindEvent(li, data[i]);
            };

            function bindEvent(li, data) {
              li.click(function () {
                event.stopPropagation();
                var nowFloor = Rtmap.Scene.getNowFloor();
                if (data.floor.toLowerCase() != nowFloor) {
                  _triggerEvent("changeToNearFloor", [data.floor]);
                  Rtmap.Scene.changeFloorTo(data.floor);
                };
                _markerOneResult(data);
                //切换为自由模式
                window.locationModel = "free";
                Rtmap.Control.disableLocal(); //默认置灰
                //关键词搜索埋点
                if (window.buriedpoint) {
                  window.buriedpoint.search_poi(data.name);
                }
              });
            };
            backAction = _clearSearchResult
          }

          function _markerOneResult(data) {
            marker ? Rtmap.Scene.removeLayer(marker, true) : "";
            var redIconUrl = _page.Style.getGlobalConfig("focus_icon_url");
            var _icon = L.icon({
              iconUrl: redIconUrl,
              iconRetinaUrl: redIconUrl,
              iconSize: [30, 30],
              iconAnchor: [15, 30],
              shadowSize: [68, 95],
              shadowAnchor: [22, 94]
            });
            marker = Rtmap.Scene.createMarker({
              x: data.x,
              y: data.y,
              icon: _icon
            });
            marker.selected = true;
            _clearMarkers();
            Rtmap.Scene.moveTo({
              x: data.x,
              y: data.y
            }, 19);
            var listBox = $(d).find(".resultListBox");
            listBox.hide();
            backAction = function () {
              listBox.show();
              backAction = _clearSearchResult
            };
            currentSearchPoi = {};
            currentSearchPoi.x = data.x;
            currentSearchPoi.y = data.y;
            currentSearchPoi.floor = data.floor;
            currentSearchPoi.poi_no = data.poi_no;
            _page.Search.FocusResult = currentSearchPoi;
            _triggerEvent("markerSearchToMap", [
              [data],
              [marker]
            ])
          }

          function ajax_search(searchType) {
            var val = searchVal;
            var e = []; //["电梯"];
            var ary = self.getCategoryList().concat(e);
            if (ary.indexOf(val) > -1) {
              searchType = "category";
            }
            if (val == "") {
              return;
            }
            if (!searchType) {
              addHistory(val);
            }
            _page.Search.request({
              searchPageIndex: searchPageIndex,
              keyword: val,
              searchType: searchType,
              className: (arguments[1] || "")
            }, function (filterData, originData, jsonData) {
              resultListData = filterData;
              responsePageCount = originData.pagecount;
              if (searchPageIndex > responsePageCount) return; //若超出数据的分页索引数，则不显示重复结查List
              if (originData.poilist && originData.poilist.length > 0) {
                if (searchType == "category") {
                  var floor = Rtmap.Scene.getNowFloor();
                  var thisFloorData = resultListData[floor];
                  if (thisFloorData) {
                    // anJ 增加参数className
                    _markerMultiResult(thisFloorData, jsonData.className);
                  } else {
                    if (!(originData.floor_result && originData.floor_result.length > 0)) {
                      return;
                    };
                    var pFloor = getNearFloor(originData.floor_result, floor);
                    var nearFloor = pFloor > 0 ? "f" + pFloor : "b" + (-pFloor);
                    _triggerEvent("changeToNearFloor", [nearFloor]);
                    Rtmap.Scene.changeFloorTo(nearFloor, function () {
                      ajax_search("category", jsonData.className);
                    });
                    responsePageCount = null;
                    //_markerMultiResult(resultListData[nearFloor]);
                    function getNearFloor(floorAry, nowFloor) {
                      var nowFloor_Int = parseFloor(nowFloor);
                      for (var i = 0; i < floorAry.length; i++) {
                        floorAry[i] = parseFloor(floorAry[i]);
                      }

                      function parseFloor(floor) {
                        floor = floor.toLowerCase();
                        floor = floor.replace(/b/g, "-");
                        floor = floor.replace(/f/g, "");
                        floor = parseFloat(floor);
                        return floor;
                      };
                      floorAry.sort(function (a, b) {
                        return a - b;
                      });
                      var nearFloorIndex = getGapPlace(0);

                      function getGapPlace(count) {
                        var prevIndex = floorAry.indexOf(nowFloor_Int + count);
                        var nextIndex = floorAry.indexOf(nowFloor_Int - count);
                        if (prevIndex > -1) {
                          return prevIndex;
                        } else if (nextIndex > -1) {
                          return nextIndex;
                        } else {
                          return getGapPlace(count += 0.5);
                        };
                      }
                      return floorAry[nearFloorIndex];
                    };
                  }
                } else {
                  showResultList(originData.poilist);
                  self.showBackBtn();
                }
                //console.log(originData.pagecount,originData.pageindex,originData.pagesize);
              } else {
                _clearSearchResult();
                self.hideBackBtn();
              }
            });
          }
          //anj
          function twoClassSearch(searchType, obj) {
            var classData = obj.attr("searchData");
            if (classData) {
              if (classData.indexOf("_") != -1) {
                classData = classData.split("_");
              } else {
                classData = [classData];
              }
            } else {
              console.log("no such data");
            }
            _page.Search.searchTwoClass(classData, function (filterData, originData) {
              resultListData = filterData;
              responsePageCount = originData.pagecount;
              if (originData.poilist && originData.poilist.length > 0) {
                if (searchType == "category") {
                  var floor = Rtmap.Scene.getNowFloor();
                  var thisFloorData = resultListData[floor];
                  if (thisFloorData) {
                    // anJ 增加参数className
                    _markerMultiResult(thisFloorData);
                  } else {
                    if (!(originData.floor_result && originData.floor_result.length > 0)) {
                      return;
                    };
                    var pFloor = getNearFloor(originData.floor_result, floor);
                    var nearFloor = pFloor > 0 ? "f" + pFloor : "b" + (-pFloor);
                    _triggerEvent("changeToNearFloor", [nearFloor]);
                    Rtmap.Scene.changeFloorTo(nearFloor, null, function () {
                      twoClassSearch("category", obj);
                    });
                    responsePageCount = null;

                    function getNearFloor(floorAry, nowFloor) {
                      var nowFloor_Int = parseFloor(nowFloor);
                      for (var i = 0; i < floorAry.length; i++) {
                        floorAry[i] = parseFloor(floorAry[i]);
                      }

                      function parseFloor(floor) {
                        floor = floor.toLowerCase();
                        floor = floor.replace(/b/g, "-");
                        floor = floor.replace(/f/g, "");
                        floor = parseFloat(floor);
                        return floor;
                      };
                      floorAry.sort(function (a, b) {
                        return a - b;
                      });
                      var nearFloorIndex = getGapPlace(0);

                      function getGapPlace(count) {
                        var prevIndex = floorAry.indexOf(nowFloor_Int + count);
                        var nextIndex = floorAry.indexOf(nowFloor_Int - count);
                        if (prevIndex > -1) {
                          return prevIndex;
                        } else if (nextIndex > -1) {
                          return nextIndex;
                        } else {
                          return getGapPlace(count += 0.5);
                        };
                      }
                      return floorAry[nearFloorIndex];
                    };
                  }
                } else {
                  showResultList(originData.poilist);
                  self.showBackBtn();
                }
                //console.log(originData.pagecount,originData.pageindex,originData.pagesize);
              } else {
                _clearSearchResult();
                self.hideBackBtn();
              }
            });
          }
        },
        showBackBtn: function () {
          $(this.html).find(".rtmap_search_box").addClass("result");
        },
        hideBackBtn: function () {
          $(this.html).find(".rtmap_search_box").removeClass("result");
        },
        getCategoryList: function () {
          var ary = [];
          $(this.html).find(".categoryList li").each(function () {
            var searchData = $(this).attr("searchData");
            ary.push(searchData);
          });
          return ary;
        },
        onAdd: function () {
          var d = L.DomUtil.create('div', '');
          var buildType = Rtmap.Config.getBuildingType();
          var difLiDom = '';
          if (buildType == 'airport') {
            difLiDom = '<li class="checkin" searchData="1801%">值机柜台</li>';
          } else {
            difLiDom = '<li class="entertainment" searchData="1300%_1301%_1302%">娱乐</li>';
          }
          d.innerHTML = '' +
            '<div class="rtmap_search_box">' +
            '<div class="back"><i class="fa fa-chevron-left"></i></div>' +
            '<div class="input_box">' +
            '<input type="text" class="rtmap_search_input searchInput"/>' +
            '<i class="fa fa-close clear_input_btn clearInput"></i>' +
            '<div class="search_history_box searchHistoryBox">' +
            '<div class="history_btn_bar">' +
            '<div class="slideup_history slideupHistoryBtn"><i class="fa fa-angle-up"></i></div>' +
            '<div class="clear_history_btn clearHistoryBtn">清空历史</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            //取消放大镜;
            //'<i class="fa fa-search search_btn searchBtn"></i>' +
            '<i class="fa fa-th-list search_category categoryBtn"></i>' +
            '<div class="category_box" style="display: none;">' +
            '<ul class="categoryList">' +
            '<li class="wc" searchData="1901%">卫生间</li>' +
            '<li class="restaurant" searchData="10%">餐饮</li>' +
            '<li class="business" searchData="11%_12%_14%_16%">商业</li>' +
            difLiDom +
            //'<li class="entertainment" searchData="1300%_1301%_1302%">娱乐</li>' +
            '<li class="information_desk" searchData="190401_190402">问讯</li>' +
            '<li class="doorway" searchData="190206">出入口</li>' +
            '<li class="elevator" searchData="190201">直梯</li>' +
            '<li class="ladder" searchData="190202">扶梯</li>' +
            '</ul>' +
            '</div>' +
            '<div class="resultListBox">' +
            '<ul></ul>' +
            '</div>' +
            '</div>' +
            '<div class="yellow_notice"></div>'; //+'<div class="air_view"></div>'
          this.html = d;
          this.bindEvent();
          return d;
        }
      });

      function _render() {
        var map = Rtmap.Scene.getMap();
        searchControl = new searchConstructor();
        map.addControl(searchControl)
      };

      function getHistorys() {
        var searchHistory = localStorage.getItem("searchHistory");
        var nowAry = searchHistory ? searchHistory.split(",") : [];
        return nowAry;
      }

      function clearHistorys() {
        localStorage.setItem("searchHistory", "");
      }

      function _clearSearchResult() {
        _clearResultList();
        _clearMarkers();
        _triggerEvent("clearSearchResult");
        searchVal = null;
        currentSearchPoi = null;
        _page.Search.FocusResult = null;
        if (marker) {
          marker ? Rtmap.Scene.removeLayer(marker, true) : "";
          marker = null;
        }
        Rtmap.Scene.SelectMarker ? Rtmap.Scene.removeLayer(Rtmap.Scene.SelectMarker, true) : "";
        Rtmap.Scene.SelectMarker = null;
      };

      function _clearResultList() {
        responsePageCount = null;
        searchPageIndex = 1;
        clearOld = true;
        $(searchControl.html).find(".resultListBox").hide();
        searchControl.hideBackBtn();
        $(searchControl.html).find(".searchInput").val("");
        $(searchControl.html).find(".clearInput").hide();
        var ul = $(searchControl.html).find(".resultListBox ul");
        ul.html("");
        var marker = Rtmap.Scene.SelectMarker;
        marker ? Rtmap.Scene.removeLayer(marker, true) : "";
        Rtmap.Scene.SelectMarker = null;
        _triggerEvent("clearResultList");
      };

      function addHistory(val) {
        var searchHistory = localStorage.getItem("searchHistory");
        var nowAry = searchHistory ? searchHistory.split(",") : [];
        for (var i = 0; i < nowAry.length; i++) {
          if (nowAry[i] == val) {
            return;
          }
        }
        nowAry.push(val);
        //just show 5 items;
        if (nowAry.length > 5) {
          nowAry.splice(0, nowAry.length - 5);
        }
        try {
          localStorage.setItem("searchHistory", nowAry);
        } catch (e) {
          console.log("please turn off '无痕浏览'!");
        }
      }

      function _markerMultiResult(thisFloorResult) {
        _clearResultList();
        _clearMarkers();
        var latlngs = [];
        var redIconUrl = _page.Style.getGlobalConfig("focus_icon_url"); //(normal && normal != "normal" ? normal + "_red" : "focus") +
        var blueIconUrl = _page.Style.getGlobalConfig("normal_icon_url");
        //end anJ
        var _redIcon = L.icon({
          iconUrl: redIconUrl,
          iconRetinaUrl: redIconUrl,
          iconSize: [30, 30],
          iconAnchor: [15, 30],
          shadowSize: [68, 95],
          shadowAnchor: [22, 94]
        });
        var _blueIcon = L.icon({
          iconUrl: blueIconUrl,
          iconRetinaUrl: blueIconUrl,
          iconSize: [30, 30],
          iconAnchor: [15, 30],
          shadowSize: [68, 95],
          shadowAnchor: [22, 94]
        });
        markers.length = 0;
        Rtmap.PoiLabelFactory.resetIconStatus();
        for (var i = 0; i < thisFloorResult.length; i++) {
          var x = thisFloorResult[i].x;
          var y = thisFloorResult[i].y;
          //防止查询POI中心点不一致
          var poi = Rtmap.Scene.getPoiByNum(thisFloorResult[i].floor, thisFloorResult[i].poi_no);
          if (poi) {
            x = poi.feature.properties.x_coord;
            y = poi.feature.properties.y_coord;
          }
          //Rtmap.PoiLabelFactory.hideLabel(thisFloorResult[i].poi_no, x, y);
          if (i == 0) {
            var _icon = _redIcon;
          } else {
            var _icon = _blueIcon;
          }
          var itemMarker = Rtmap.Scene.createMarker({
            icon: _icon,
            fillOpacity: 1,
            opacity: 1,
            fillColor: "red",
            color: "#ddd",
            size: 10,
            x: x,
            y: y
          });
          markers.push(itemMarker);
          itemMarker.on("click", function () {
            for (var i = 0; i < markers.length; i++) {
              markers[i].setIcon(_blueIcon);
              delete markers[i].selected;
            };
            this.setIcon(_redIcon);
            this.selected = true;
          });
          if (i == 0) {
            18
          }
          var latlng = L.CRS.EPSG3395.projection.unproject(new L.Point(x, y));
          latlngs.push(latlng);
        }
        //anJ
        var map = Rtmap.Scene.getMap();
        // fit bounds
        if (latlngs.length > 1) {
          //var polyline = L.polyline(latlngs, { color: 'red' });
          //map.fitBounds(polyline.getBounds());
        } else if (thisFloorResult.length == 1) {
          Rtmap.Scene.moveTo({
            x: thisFloorResult[0].x,
            y: thisFloorResult[0].y
          }, map.zoom); //anJ 原来是定值19
        }
        marker ? Rtmap.Scene.removeLayer(marker, true) : "";
        Rtmap.Scene.removeLayer(marker, true);
        _triggerEvent("markerSearchToMap", [thisFloorResult, markers]);
      };

      function _clearMarkers() {
        for (var i = 0; i < markers.length; i++) {
          Rtmap.Scene.removeLayer(markers[i], true);
        }
      }

      var Events = {};

      function _triggerEvent(action, ary) {
        if (Events[action]) {
          for (var i = 0; i < Events[action].length; i++) {
            Events[action][i].apply(self, ary);
          }
        }
      }

      return {
        render: _render,
        on: function (action, func) {
          if (!Events[action]) {
            Events[action] = [];
          }
          Events[action].push(func);
        },
        clearResultList: _clearResultList,
        hideCategory: function () {
          //$(searchControl.html).find(".categoryList").slideUp();
          $(searchControl.html).find(".category_box").slideUp();
        },
        clearSearchResult: _clearSearchResult,
        getCurrentSearchPoi: function () {
          return currentSearchPoi;
        },
      }
    })();

    var FloorChange = (function () {
      var FloorControl = null;
      var defaultOpen = false;

      function _render(option) {
        if (option) {
          option.defaultOpen ? defaultOpen = option.defaultOpen : "";
        }
        FloorControl = L.Control.extend({
          openstatus: false,
          _bindEvent: function () {
            var self = this;
            this.listScroll.bind("mousewheel", function () {
              event.stopPropagation();
            });
            this.listScroll.scroll(function () {
              _checkAngleStatus();
            });
            this.listScroll.bind("touchstart", function () {
              event.stopPropagation();
            });
            this.listScroll.bind("touchmove", function (event) {
              event.stopPropagation();
            });
            this.listScroll.bind("touchend", function () {
              event.stopPropagation();
            });

            function _checkAngleStatus() {
              var top = self.listScroll[0].scrollTop,
                scorllHeight = self.listScroll[0].scrollHeight;
              offsetHeight = self.listScroll[0].offsetHeight;
              realyHeight = scorllHeight - offsetHeight;
              if (top == realyHeight) {
                $(".topAngle .fa").removeClass("disable");
                $(".bottomAngle .fa").addClass("disable");
                if (top == 0 && realyHeight == 0) {
                  $(".topAngle .fa").addClass("disable");
                  $(".bottomAngle .fa").addClass("disable");
                }
              } else if (top == 0) {
                $(".topAngle .fa").addClass("disable");
                $(".bottomAngle .fa").removeClass("disable");
              } else {
                $(".topAngle .fa").removeClass("disable");
                $(".bottomAngle .fa").removeClass("disable");

              };
            };
            this.floorBtn.click(function (event) {
              event.stopPropagation();
              event.preventDefault();
              self.openstatus = !self.openstatus;
              self.changeList.slideToggle(300);
              if (self.openstatus) {
                var activeLi = self.listScroll.find("li.active");
                var t = activeLi[0].offsetTop;
                var target = t - 80,
                  start = self.listScroll[0].scrollTop;
                var oneStep = (target - start) / 30;
                var now = start;

                function doit() {
                  now += oneStep;
                  self.listScroll[0].scrollTop = now;
                  if (Math.abs(now - target) <= Math.abs(oneStep)) {
                    self.listScroll[0].scrollTop = target;
                    _checkAngleStatus();
                    return;
                  }
                  _checkAngleStatus();
                  requestAnimationFrame(doit);
                };
                doit();
              };
            });

            Rtmap.Scene.on("changeFloor", function (f) {
              //var textFloor = f.toUpperCase();
              var textFloor = _page.Config.getFloorAliasName(f);
              var floorSubject = _page.Config.getFloorSubject(f);
              //若是0.5层，改为1M，如b1.5改为b2m,应凯德需求先统一修改
              if (textFloor.indexOf('.') > 0) {
                textFloor = textFloor.replace("B", "");
                textFloor = textFloor.replace("F", "");
                var floorValue = Math.round(parseFloat(textFloor));
                textFloor = f.substring(0, 1) + (floorValue.toString() + "M");
              }
              self.floorBtn.html(textFloor.toUpperCase() + "</br><i class='floor_subject_btn'>" + floorSubject + "</i>");
              self.listScroll.find("li.active").removeClass("active");
              self.listScroll.find("li." + textFloor.toLowerCase()).addClass("active");
              if (!defaultOpen) self.changeList.slideUp();
              self.openstatus = false;
            });
            Rtmap.Scene.on("mapAction", function () {
              if (!defaultOpen) self.changeList.slideUp();
              self.openstatus = false;
            });
            Rtmap.Scene.on("poiClick", function () {
              if (!defaultOpen) self.changeList.slideUp();
              self.openstatus = false;
            });
          },
          setData: function (ary) {
            var ul = this.listScroll.find(".floor_list");
            ul.html("");
            this.dataLength = ary.length;
            for (var i = 0; i < ary.length; i++) {
              var floor = ary[i].floor.toLocaleLowerCase();
              var floorSubject = ary[i].floor_subject || "";

              var textFloor = _page.Config.getFloorAliasName(floor);
              //若是0.5层，改为1M，如b1.5改为b2m,应凯德需求先统一修改
              if (textFloor.indexOf('.') > 0) {
                textFloor = textFloor.replace("B", "");
                textFloor = textFloor.replace("F", "");
                var floorValue = Math.round(parseFloat(textFloor));
                textFloor = floor.substring(0, 1) + (floorValue.toString() + "M");
              }
              var li = $("<li/>", {
                class: textFloor.toLowerCase()
              });
              /* 如果没有主题楼层居中 */
              if (!floorSubject) {
                li.css({
                  "line-height": "40px",
                  "font-size": "16px"
                });
              }
              li.html(textFloor.toUpperCase() + "</br><i class='floor_subject'>" + floorSubject + "</i>");
              var initFloor = Rtmap.Scene.getNowFloor();
              if (floor == initFloor) {
                li.addClass("active");
              }
              bindEvent(li, floor);
              ul.append(li);
            }

            function bindEvent(li, floor) {
              li.click(function (event) {
                window.locationModel = "free"; //转为自由模式
                Rtmap.Control.disableLocal();
                event.stopPropagation();
                var nowFloor = Rtmap.Scene.getNowFloor();
                if (floor == nowFloor) {
                  return;
                };
                Rtmap.Scene.changeFloorTo(floor);
              });
            }
          },
          options: {

          },
          onAdd: function () {
            var d = L.DomUtil.create('div', '');
            d.innerHTML = '' +
              '<div class="floor_change_box">' +
              '<div class="rtmap_floor_change_list">' +
              //'<div class="top_angle topAngle"><i class="fa fa-angle-up"></i></div>' +
              '<div class="list_scroll">' +
              '<ul class="floor_list">' +
              '</ul>' +
              '</div>' +
              //'<div class="bottom_angle bottomAngle"><i class="fa fa-angle-down"></i></div>' +
              '</div>' +
              '<div class="rtmap_floor_btn">' +
              '<i class="fa fa-spinner fa-spin"></i>' +
              '</div>' +
              '</div>';
            var list_scroll = $(d).find(".list_scroll");
            var floor_btn = $(d).find(".rtmap_floor_btn");
            this.floorBtn = floor_btn;
            this.listScroll = list_scroll;
            this.changeList = $(d).find(".rtmap_floor_change_list");
            this._bindEvent();
            $(d).parent().addClass("flo");
            return d;
          }
        });

        var f = new FloorControl({
          position: "bottomleft"
        });
        var map = Rtmap.Scene.getMap();
        map.addControl(f)
        return f;
      };

      return {
        render: _render
      }
    })();

    return {
      showScale: function () {
        var scale = L.control.scale({
          position: "bottomleft",
          imperial: false,
          className: "fa",
        });
        var map = Rtmap.Scene.getMap();
        map.addControl(scale)
        var con = scale.getContainer();
        var jqueryDom = $(con);
        jqueryDom.addClass("rtmap_scale");
        var b = jqueryDom.parent();
        b.addClass("rtmap_scale_box");
      },
      showZoom: function () {
        var z = L.control.zoom({
          position: "bottomright",
          zoomInText: "+",
          zoomOutText: "-"
        });
        var map = Rtmap.Scene.getMap();
        map.addControl(z)
        var con = z.getContainer();
        var jqueryDom = $(con);
        jqueryDom.addClass("rtmap_zoom");
        var b = jqueryDom.parent();
        b.addClass("rtmap_zoom_box");

        var outZ = $(".leaflet-control-zoom-out");
        var inZ = $(".leaflet-control-zoom-in");
        outZ.bind("touchstart", function (event) {
          if ($(this).attr("class").indexOf("leaflet-disabled") > -1) {
            event.preventDefault();
            event.stopPropagation();
          };
        });
        inZ.bind("touchstart", function (event) {
          if ($(this).attr("class").indexOf("leaflet-disabled") > -1) {
            event.preventDefault();
            event.stopPropagation();
          };
        });
      },
      showLocal: function (handler) {
        var Local = L.Control.extend({
          _enable: true,
          setEnable: function (enable) {
            if (this._enable == enable)
              return;
            this._enable = enable;
            var local = $(this._container);
            if (this._enable) {
              local.css({
                "background": "rgba(255,255,255,0) url(public/img/control.png) center center no-repeat",
                "background-size": "cover"
              });
            } else {
              local.css({
                "background": "rgba(255,255,255,0) url(public/img/control_disable.png) center center no-repeat",
                "background-size": "cover"
              });
            }
          },
          options: {

          },
          onAdd: function () {
            var controlDiv = L.DomUtil.create('i', 'fa fa-crosshairs');
            $(controlDiv).click(function () {
              //if (!_localControl._enable) return;
              handler();
              var abc = $(this);
              abc.css({
                "pointer-events": "none"
              });
              setTimeout(function () {
                abc.css({
                  "pointer-events": "auto"
                })
              }, 2000);

            });
            $(controlDiv).dblclick(function () {
              return false;
            });
            $(controlDiv).addClass("rtmap_local");
            this.html = controlDiv;
            return controlDiv;
          }
        });

        var l = new Local({
          position: "bottomright"
        });
        var map = Rtmap.Scene.getMap();
        map.addControl(l)
        _localControl = l;
      },

      disableLocal: function () {
        _localControl ? _localControl.setEnable(false) : "";
      },

      enableLocal: function () {
        _localControl ? _localControl.setEnable(true) : "";
      },

      showSearch: function () {
        SearchModel.render();
        return SearchModel;
      },
      showFloorChange: function (option) {
        return FloorChange.render(option);
      },
      getSearchResultMarker: function () {
        return markers;
      }
    }
  })();

  /*
   *  this module use to create name label;
   */
  _page.PoiLabelFactory = (function () {
    var LabelList = [];
    var _clearList = [];

    var _groupLayer = null;
    var _labelCache = {};
    var _isNonePartialRefresh = false; //不进行局部刷新判断(适用于后台计算标注场景)
    var _showCacheLabel = {}; //设置好缩放比的标注(不单独计算缩放)
    var _prettyShowCallback = null;

    //放大系数
    var zoomRatio;
    var zoomfactor;
    var map;

    function _getRatio() {
      map = _page.Scene.getMap();
      var zoomLevelCount = map.options.maxZoom - map.options.minZoom;
      var currentZoomLevel = Math.round(map._zoom) - map.options.minZoom;
      zoomfactor = (Math.pow(2, currentZoomLevel)); //最小比例尺放大系数
      if (currentZoomLevel < 0) {
        zoomfactor = 2;
      }
      if ((currentZoomLevel / zoomLevelCount) <= 0.2) {
        zoomRatio = 1.6; //当前比例尺放大系数
      } else if ((currentZoomLevel / zoomLevelCount) <= 0.4) {
        zoomRatio = 1.5; //当前比例尺放大系数
      } else if ((currentZoomLevel / zoomLevelCount) <= 0.6) {
        zoomRatio = 1.4; //当前比例尺放大系数
      } else if ((currentZoomLevel / zoomLevelCount) <= 0.8) {
        zoomRatio = 1.2; //当前比例尺放大系数
      } else {
        zoomRatio = 1.0; //当前比例尺放大系数
      }
    }

    //是否局部刷新
    function _isPartialRefresh() {
      //若设定为不允许局部刷新
      if (_isNonePartialRefresh) {
        return false;
      }
      map = _page.Scene.getMap();
      //大比例尺时，换为局部刷新
      if (map._zoom > (map.options.minZoom + 2)) {
        return true;
      } else {
        return false;
      }
    }

    function _getInfo(Label, scaleFactor) {
      if (!scaleFactor) {
        scaleFactor = 1;
      }
      var centerP = Label.getCenterPoint() || {};
      var lb = Label.getSize() || {};
      return {
        x: centerP.x,
        y: centerP.y,
        height: lb.height * scaleFactor,
        width: lb.width * scaleFactor
      }
    };

    function _checkHit(A, B) {
      if ((Math.abs(B.x - A.x) < (A.width / 2 + B.width / 2)) && (Math.abs(B.y - A.y) < (A.height / 2 + B.height / 2))) {
        return true;
      }
      return false;
    };

    function _removeCache(zoom, label) {
      if (!_labelCache) return;
      if (!_labelCache[zoom]) return;
      for (var j = 0; j < _labelCache[zoom].length; j++) {
        if (_labelCache[zoom][j] == LabelList[i]) {
          _labelCache[zoom].splice(j, 1);
          break;
        }
      }
    }

    //第一次加载数据时计算label压盖情况
    function _findOverlapLabels(label) {
      _getRatio();
      //zoomfactor(地图最小比例尺时的放大系数);
      //zoomRatio(地图当前比例尺的放大系数)
      var minZoomVisble = true;
      //label.filterByZoom(Math.round(map._zoom));
      for (var i = 0; i < LabelList.length; i++) {
        if (label == LabelList[i]) continue;
        //计算最小级别时的标注压盖情况，因为初始化加载时默认会将地图放大一级所以算第一级时，放大系数乘以2;
        if (_checkHit(_getInfo(LabelList[i], zoomfactor), _getInfo(label, zoomfactor))) {
          label.OL_Array ? "" : label.OL_Array = [];
          label.OL_Array.push(LabelList[i]);
          if (LabelList[i].minZoomVisble) {
            if (!label.haveIcon || LabelList[i].haveIcon || label._labelHideStatus) {
              minZoomVisble = false;
            } else {
              //从缓存中移除
              _removeCache(map.options.minZoom, LabelList[i]);
            }
          }
          //判断当前级别是否压盖
          if (_checkHit(_getInfo(LabelList[i], zoomRatio), _getInfo(label, zoomRatio))) {
            if (!LabelList[i].show) continue;
            if (label.firstShow && !LabelList[i].firstShow) { //优先显示
              //从缓存中移除
              _removeCache(map.options.minZoom, LabelList[i]);
              $(LabelList[i]._container).addClass("hide");
              LabelList[i].show = false;
            } else {
              if (!label.haveIcon || LabelList[i].haveIcon || label._labelHideStatus) { //图标显示优先
                //隐藏
                $(label._container).addClass("hide");
                label.show = false;
              } else {
                //从缓存中移除
                _removeCache(map.options.minZoom, LabelList[i]);
                $(LabelList[i]._container).addClass("hide");
                LabelList[i].show = false;
              }
            }
          }
        }
      }
      //若是大范围场景
      if (_page.Config.getOption().largeScene && _page.Config.getOption().loadModel == "cdn") {
        /*隐藏不该在该级别出现的poi 并且最小级别时不显示 */
        if (label._labelHideStatus || Math.round(map._zoom) == map.options.minZoom) {
          $(label._container).addClass("hide");
          label.show = false;
        }
      }
      //缓存最小级别时可见标注
      //if (minZoomVisble) {
      //    if (!_labelCache[map.options.minZoom]) {
      //        _labelCache[map.options.minZoom] = [];
      //    }
      //    _labelCache[map.options.minZoom].push(label);
      //    label.setZoomVisble(map.options.minZoom, true);
      //    label.minZoomVisble = true;
      //}
      //else {
      //    label.minZoomVisble = false;
      //    label.setZoomVisble(map.options.minZoom, false);
      //}
      ////缓存当前级别可见要标注
      //if (label.show) {
      //    if (!_labelCache[map._zoom]) {
      //        _labelCache[map._zoom] = [];
      //    }
      //    _labelCache[map._zoom].push(label);
      //    //标记当前级别可见
      //    label.setZoomVisble(map._zoom, true);
      //}
    }

    //设置显示缓存(预先生成好的缓存)
    function _setShowCacheLabel(labelCache) {
      _showCacheLabel = labelCache;
    }

    //清除缓存
    function _clearShowCacheLable() {
      _showCacheLabel = {};
    }

    //获取缓存
    function _getShowCacheLabel() {
      return _showCacheLabel;
    }

    //poi是否包含在缓存中
    function _isInCacheLael(poiNum, floor, zoomLevel) {
      var floorCacheLabel = _showCacheLabel[floor][zoomLevel];
      if (floorCacheLabel) {
        for (var i = 0; i < floorCacheLabel.length; i++) {
          if (floorCacheLabel[i] == poiNum)
            return true;
        }
      }
      return false;
    }

    function _showByCache() {
      var map = Rtmap.Scene.getMap();
      var nowZoom = Rtmap.Scene.getNowZoomLevel();
      var floor = Rtmap.Scene.getNowFloor();
      if (!_showCacheLabel || !_showCacheLabel[floor]) return false;
      var floorCacheLabel = _showCacheLabel[floor][nowZoom];
      if (floorCacheLabel) {
        //根据缓存添加标注
        _showCacheLabel.LabelList ? "" : _showCacheLabel.LabelList = {};
        var floorCacheLabel = _showCacheLabel[floor][nowZoom];
        if (floorCacheLabel) {
          for (var i = 0; i < floorCacheLabel.length; i++) {
            var poiNum = floorCacheLabel[i];
            if (!_showCacheLabel.LabelList[poiNum] && _showCacheLabel[floor].labelmetalist) {
              try {
                var labelMeta = _showCacheLabel[floor].labelmetalist[poiNum];
                if (labelMeta) {
                  var label = Rtmap.PoiLabelFactory.addLabel(labelMeta);
                  _showCacheLabel.LabelList[poiNum] = label;
                  LabelList.push(label);
                }
              } catch (e) {
                console.log(e);
              }
            }
          }
        }
        //适当外扩
        var bound = map.getBounds().pad(0.1);
        //根据缓存显示标注
        for (var i = 0; i < LabelList.length; i++) {
          var visble = LabelList[i].getZoomVisble(nowZoom);
          if (visble == null) {
            visble = _isInCacheLael(LabelList[i].poiNum, floor, nowZoom);
          }
          LabelList[i].setZoomVisble(nowZoom, visble);
          if (LabelList[i].getZoomVisble(nowZoom) && bound.contains(LabelList[i]._latlng)) {
            LabelList[i].iconLabelShow();
            LabelList[i].show = true;
            $(LabelList[i]._container).removeClass("hide");
          } else {
            LabelList[i].iconLabelHide();
            LabelList[i].show = false;
            $(LabelList[i]._container).addClass("hide");
          }
        }
        return true;
      } else {
        return false;
      }
    }

    return {
      getLabelLayers: function () {
        return LabelList;
      },
      getLabelByPoiNum: function (poiNum) {
        var length = LabelList.length;
        while (length--) {
          if (LabelList[length].poiNum == poiNum) {
            return LabelList[length];
          }
        }
      },
      getLabelGroupLayer: function () {
        return _groupLayer;
      },
      getLabelCache: function () {
        return _labelCache;
      },
      setLableEnvirement: function (labelCache, labellist, labelGrouplayer) {
        _labelCache = labelCache;
        LabelList = labellist;
        _groupLayer = labelGrouplayer;
      },
      setNonePartialRefresh: function (b) {
        _isNonePartialRefresh = b;
      },
      setPrettyShowCallback: function (callback) {
        _prettyShowCallback = callback;
      },
      eachLabel: function (func) {
        for (var i = 0; i < LabelList.length; i++) {
          func(LabelList[i]);
        }
      },
      removeLabelCache: function (label, zoom) {
        var labels = _labelCache[zoom];
        if (labels) {
          for (var i = 0; i < labels.length; i++) {
            if (label == labels[i])
              labels.splice(i, 1);
          }
        }
      },
      clearAll: function () {
        _page.Scene.removeLayers(LabelList);
        LabelList = [];
        _clearList = [];
        _labelCache = {};
        _showCacheLabel.LabelList = {};
      },
      allLabelsHidden: false,
      hideLabel: function (poiNum, x, y) {
        for (var i = 0; i < LabelList.length; i++) {
          if (LabelList[i].poiNum == poiNum) {
            LabelList[i].iconLabelHide();
            return;
          }
        }
      },
      hideAllLabels: function () {
        _page.Scene.hideLayers(LabelList);
        allLabelsHidden = true;
      },
      prettyShow: function () {
        var map = _page.Scene.getMap();
        //若是大范围场景
        if (_page.Config.getOption().largeScene && _page.Config.getOption().loadModel == "cdn") {
          //分级显示图层顺序
          _page.Scene.filterLayersByZoom();
          //最小级别时不显示
          if (parseInt(_page.Scene.getMap()._zoom) <= map.options.minZoom) {
            return;
          }
        }
        //是否局部刷新
        var isPartialRefresh = _isPartialRefresh();
        _getRatio();
        //适当外扩
        var bound = map.getBounds().pad(0.1);
        var currentZoom = Math.round(_page.Scene.getMap()._zoom);
        //使用
        var res = _showByCache();
        console.log(res);
        if (!res) {
          //若当前级别缓存存在，且当前级别为最小级别
          if (_labelCache[currentZoom]) {
            var labelCacheList = _labelCache[currentZoom];
            for (var i = 0; i < labelCacheList.length; i++) {
              var label = labelCacheList[i];
              //若是大范围场景
              if (_page.Config.getOption().largeScene && _page.Config.getOption().loadModel == "cdn") {
                label.filterByZoom(currentZoom);
              }
              label.show = true;
              //anJ 是否隐藏图标
              if (label._labelHideStatus) {
                $(label._container).addClass("hide");
                label.show = false;
              } else {
                //局部刷新时，不在当前视图范围内
                if (isPartialRefresh && !bound.contains(label._latlng)) {
                  $(label._container).addClass("hide");
                  label.show = false;
                  continue;
                }
                $(label._container).removeClass("hide");
              }
            }
          } else { //不存在则重新计算
            _labelCache[currentZoom] = [];
            for (var i = 0; i < LabelList.length; i++) {
              var label = LabelList[i];
              //若是大范围场景
              if (_page.Config.getOption().largeScene && _page.Config.getOption().loadModel == "cdn") {
                label.filterByZoom(currentZoom);
              }
              var OL_Array = label.OL_Array; //获取当前级别压盖缓存
              if (!OL_Array) { //与其它POI都不压盖
                _labelCache[currentZoom].push(label);
                $(label._container).removeClass("hide");
                label.show = true;
                continue;
              }
              var bOverlap = false;
              for (var j = 0; j < OL_Array.length; j++) {
                var label_OL = OL_Array[j];
                if (label_OL == label) continue;
                if (_checkHit(_getInfo(label, zoomRatio), _getInfo(label_OL, zoomRatio))) {
                  if (label_OL.show) {
                    if (label.firstShow && !LabelList[i].firstShow) { //优先显示
                      //从缓存中移除
                      _removeCache(map.options.minZoom, LabelList[i]);
                      $(LabelList[i]._container).addClass("hide");
                      LabelList[i].show = false;
                    } else {
                      if ((label.haveIcon && !label_OL.haveIcon) || label.getZoomVisble(currentZoom - 1)) { //图标优先显示
                        $(label_OL._container).addClass("hide");
                        label_OL.show = false;
                        this.removeLabelCache(label_OL, currentZoom);
                      }
                      if ((!label.haveIcon && label_OL.haveIcon) || !label.getZoomVisble(currentZoom - 1)) {
                        bOverlap = true;
                        break;
                      }
                    }
                  } else {
                    //$(label_OL._container).addClass("hide");
                    //label_OL.show = false;
                  }
                }
              }

              //是否存在压盖
              if (!bOverlap) {
                _labelCache[currentZoom].push(label);
                label.setZoomVisble(currentZoom, true);

                $(label._container).removeClass("hide");
                label.show = true;
              } else {
                $(label._container).addClass("hide");
                label.show = false;
              }
            }
            //局部刷新
            if (isPartialRefresh) {
              for (var k = 0; k < _labelCache[currentZoom].length; k++) {
                var _label = _labelCache[currentZoom][k];
                if (!bound.contains(_label._latlng)) {
                  $(_label._container).addClass("hide");
                  _label.show = false;
                }
              }
            }
            delete _labelCache[currentZoom]; //删除缓存，此种方式
          }
        }
        //标注是否显示标记
        allLabelsHidden = false;
      },
      addLabel: function (jsonData) {
        var labelTitle = new Label(jsonData.latlng, jsonData.name, {}, jsonData.type);
        labelTitle.poiNum = jsonData.poiNum;
        labelTitle.two_class = jsonData.two_class;
        //优先显示
        labelTitle.firstShow = _page.Classification.isFirstShow(labelTitle.two_class);
        labelTitle.class_extension = jsonData.class_extension;
        labelTitle.layer = jsonData.layer;
        LabelList.push(labelTitle);
        if (_groupLayer == null) {
          _groupLayer = L.layerGroup();
          _page.Scene.addLayer(_groupLayer);
        }
        _groupLayer.addLayer(labelTitle);
        labelTitle._nowLayer = jsonData.layer;
        labelTitle.setDisplayStyle();
        labelTitle.show = true;
        var nowZoom = Rtmap.Scene.getNowZoomLevel();
        var floor = Rtmap.Scene.getNowFloor();
        if (!_showCacheLabel || !_showCacheLabel[nowZoom]) //是否使用预加载标注缓存
          _findOverlapLabels(labelTitle);
        return labelTitle;
      },
      addExistLabel: function (lable) {
        LabelList.push(lable);
      },
      resetIconStatus: function () {
        for (var i = 0; i < LabelList.length; i++) {
          LabelList[i].iconLabelShow();
        }
      },
      setShowCacheLabel: _setShowCacheLabel,
      getShowCacheLabel: _getShowCacheLabel,
      clearShowCacheLable: _clearShowCacheLable
    }
  })();

  /*
   * Scene
   * */
  _page.Scene = (function () {

    function checkMap() {
      if (!_map) {
        throw new Error("you need create Map first!");
      }
    }

    var _map = null;
    var _parentDOM = null;

    var POI_layer = null;
    var POI_layer_childs = {};
    var TypeData_Layer = {};
    var BK_layer = null;
    var FN_layer = null;
    var _shoppingLayers = [];
    var _trafficLayers = [];

    var _nowFloor = null;
    var _buildBounds = null;
    var otherMarker = {};

    var _Events = {
      _call: function (key, ary) {
        var events = this[key];
        if (events) {
          for (var i = 0; i < events.length; i++) {
            events[i].apply(this, ary);
          };
        }
      },
      changeFloor: [],
      BKClick: [],
      poiClick: []
    };

    var _layersCache = {}; //楼层数据缓存
    var _allowPoiClick = true; //是否允许POI点击

    function _getBuildBounds(data) {
      var f = data.features;
      var aryX = [];
      var aryY = [];
      for (var i = 0; i < f.length; i++) {
        var temp = f[i];
        if (temp.geometry.type == "MultiPolygon") {
          var coords = temp.geometry.coordinates[0][0];
          for (var j = 0; j < coords.length; j++) {
            aryX.push(coords[j][0]);
            aryY.push(coords[j][1]);
          }
        } else {
          for (var k = 0; k < temp.geometry.coordinates[0].length; k++) {
            var coords = temp.geometry.coordinates[0][k];
            for (var j = 0; j < coords.length; j++) {
              aryX.push(coords[0]);
              aryY.push(coords[1]);
            }
          }
        }
      }
      aryX.sort(function (a, b) {
        return parseFloat(a) - parseFloat(b);
      });
      aryY.sort(function (a, b) {
        return parseFloat(a) - parseFloat(b);
      });
      var x = (aryX[0] + aryX[aryX.length - 1]) / 2;
      var y = (aryY[0] + aryY[aryY.length - 1]) / 2;
      var d = {
        left: aryX[0],
        right: aryX[aryX.length - 1],
        bottom: aryY[0],
        top: aryY[aryY.length - 1],
        centerX: x,
        centerY: y
      };
      return d;
    }

    var _fistrLoad = true; //是否初始加载
    var _loadModel = "cdn"; //数据加载模式

    //f-楼层，callback-绘制
    function _renderFloor(f, callback, fmark) {
      //加载数据
      _nowFloor = f;
      if (_layersCache[f]) {
        //若已缓存过
        POI_layer = _layersCache[f].poi_layer;
        POI_layer_childs = _layersCache[f].poi_layer_childs;
        BK_layer = _layersCache[f].bk_layer;
        FN_layer = _layersCache[f].fn_layer;
        TypeData_Layer = _layersCache[f].typedata_layers;

        BK_layer ? Rtmap.Scene.addLayer(BK_layer) : "";
        BK_layer ? BK_layer.hide = false : "";
        FN_layer ? Rtmap.Scene.addLayer(FN_layer) : "";
        FN_layer ? FN_layer.hide = false : "";
        for (var layer in TypeData_Layer) {
          if (TypeData_Layer[layer].addToMap) {
            Rtmap.Scene.addLayer(TypeData_Layer[layer]);
            TypeData_Layer[layer].hide = false;
          }
        }
        POI_layer ? Rtmap.Scene.addLayer(POI_layer) : "";
        POI_layer ? POI_layer.hide = false : "";
        Rtmap.Scene.filterLayersByZoom();
        //添加注记
        Rtmap.PoiLabelFactory.setLableEnvirement(_layersCache[f].labelCache, _layersCache[f].labelLayers, _layersCache[f].labelGrouplayer);
        for (var i = 0; i < _layersCache[f].labelLayers.length; i++) {
          if (!_layersCache[f].labelLayers[i]) continue;
          Rtmap.Scene.addLayer(_layersCache[f].labelLayers[i]);
          _layersCache[f].labelLayers[i].setDisplayStyle();
        }
        Rtmap.PoiLabelFactory.hideAllLabels();
        Rtmap.PoiLabelFactory.prettyShow();
        callback ? callback() : "";
        _Events._call("drawedMap", [f, fmark])
      } else {
        var buildType = Rtmap.Config.getBuildingType();
        if (buildType == 'airport' && _fistrLoad) {
          _loadModel = "cdn";
        }
        if (_loadModel == "cdn") {
          var BKData, FNData, PoiData;
          var TypeData = {};

          Rtmap.DataProvider.getBKCDN({
              floor: f
            },
            function (data) {
              BKData = data;
              _buildBounds = _getBuildBounds(data);
              //第一次加载完BK层后设置地图范围
              if (_fistrLoad) {
                if (_fitGeoBounds(null, false)) {
                  _fistrLoad = false;
                }
              } else {
                _fitGeoBounds(null, true)
              }
              Rtmap.Scene.createBK(BKData);
              Rtmap.DataProvider.getFNCDN({
                floor: f
              }, function (data) {
                FNData = data;
                Rtmap.Scene.createFN(FNData);
                Rtmap.DataProvider.getPoiCDN({
                  floor: f
                }, function (data) {
                  PoiData = data;
                  //var t1 = new Date().getTime();
                  Rtmap.Scene.createPoi(PoiData, true);
                  //var t2 = new Date().getTime();
                  //console.log((t2 - t1) / 1000.00);

                  Rtmap.DataProvider.getTypeDataCDN({
                    floor: f
                  }, "infrastructure", function (data) {
                    TypeData.InfrastructureData = data;
                    Rtmap.Scene.createTypeData(TypeData.InfrastructureData, "infrastructure");

                    Rtmap.DataProvider.getTypeDataCDN({
                      floor: f
                    }, "traffic", function (data) {
                      TypeData.TrafficData = data;
                      Rtmap.Scene.createTypeData(TypeData.TrafficData, "traffic", true);
                      callback ? callback() : "";

                      //缓存当前楼层数据
                      _layersCache[f] = {
                        layers: TypeData_Layer,
                        bk_layer: BK_layer,
                        fn_layer: FN_layer,
                        poi_layer: POI_layer,
                        poi_layer_childs: POI_layer_childs,
                        typedata_layers: TypeData_Layer,
                        labelCache: _page.PoiLabelFactory.getLabelCache(),
                        labelLayers: _page.PoiLabelFactory.getLabelLayers(),
                        labelGrouplayer: _page.PoiLabelFactory.getLabelGroupLayer()
                      };

                      _Events._call("drawedMap", [f, fmark])
                    });
                  });
                });
              });
            },
            function () {
              _loadModel = "server";
              _renderFloorFromServer(f, callback);
              _page.Config.setup({
                loadModel: _loadModel
              });
            }
          );
        } else {
          _renderFloorFromServer(f, callback);
        }
      }
      _page.Config.setup({
        loadModel: _loadModel
      });
    };

    //从server中加载数据渲染图层
    function _renderFloorFromServer(f, callback) {
      //加载数据
      var BKData, FNData, PoiData;
      Rtmap.DataProvider.getBK({
        floor: f
      }, function (data) {
        BKData = data;
        _buildBounds = _getBuildBounds(data);
        //第一次加载完BK层后设置地图范围
        if (_fistrLoad) {
          if (_fitGeoBounds(null, false)) {
            _fistrLoad = false;
          }
        } else {
          _fitGeoBounds(null, true)
        }
        Rtmap.DataProvider.getFN({
          floor: f
        }, function (data) {
          FNData = data;
          Rtmap.DataProvider.getPoi({
            floor: f
          }, function (data) {
            PoiData = data;
            Rtmap.Scene.createBK(BKData);
            Rtmap.Scene.createFN(FNData);
            Rtmap.Scene.createPoi(PoiData, true);
            _Events._call("drawedMap", [f]);
            callback ? callback() : "";
          });
        });
      });
    };

    function _bindEventToMap() {
      _map.on("move", function (a, b, c) {
        _Events._call("mapAction")
      });
      _map.on("click", function (e) {
        _Events._call("mapAction")
        _Events._call("mapClick")
        if (_allowPoiClick) {
          //兼容Leaflet1.0
          var layer = _spatialQueryTypeData(e.latlng);
          _Events._call("poiClick", [e, layer]);
        }
      });
      _map.on("drag", function (a, b, c) {
        _Events._call("mapAction")
        _Events._call("mapDrag")
        return false;
      });
      //判断是否超出范围
      function rePosition() {
        var b = _map.getCenter();
        var bounds = _page.Scene.getBuildBounds();
        var latlng = L.CRS.EPSG3395.projection.project(b);
        var finalX = latlng.x;
        var finalY = latlng.y;
        var slopOver = false;
        if (latlng.x < bounds.left) {
          finalX = bounds.left;
          slopOver = true;
        } else if (latlng.x > bounds.right) {
          finalX = bounds.right;
          slopOver = true;
        }
        if (latlng.y > bounds.top) {
          finalY = bounds.top;
          slopOver = true;
        } else if (latlng.y < bounds.bottom) {
          finalY = bounds.bottom;
          slopOver = true;
        }
        if (slopOver) {
          _page.Scene.moveTo({
            x: finalX,
            y: finalY
          });
        }
      }
      _map.on("dragend", function (a, b) {
        rePosition();
      });

      _map.on("zoomstart", function () {
        _page.PoiLabelFactory.hideAllLabels();
        window.clearTimeout(window.zoomLabelRefreshTimer);
      });

      function zoomLabelRefresh() {
        _page.PoiLabelFactory.prettyShow();
        window.clearTimeout(window.zoomLabelRefreshTimer);
      };

      function dragLabelRefresh() {
        map = _page.Scene.getMap();
        //大比例尺时，换为局部刷新
        var ratio = parseInt((map.options.maxZoom - map.options.minZoom) / 2);
        if (map.options.maxZoom - parseInt(map._zoom) <= ratio) {
          _page.PoiLabelFactory.prettyShow();
        }
      };

      window.zoomLabelRefresh = zoomLabelRefresh;
      window.dragLabelRefresh = dragLabelRefresh;
      _map.on("zoomend", function () {
        //window.zoomLabelRefreshTimer = window.setTimeout("zoomLabelRefresh()", 500);
        //_page.PoiLabelFactory.prettyShow();
      });

      _map.on('dragstart', function () {
        //window.clearTimeout(window.dragLabelRefreshTimer);
      });

      _map.on('dragend', function () {
        //window.dragLabelRefreshTimer = window.setTimeout("dragLabelRefresh()", 500);
        _page.PoiLabelFactory.prettyShow();
      });

      _map.on('moveend', function () {
        //window.dragLabelRefreshTimer = window.setTimeout("dragLabelRefresh()", 500);
        _page.PoiLabelFactory.prettyShow();
      });

      if (debugTools) {
        $("#show").show();
      }
    }

    function _clearAll() {
      _page.PoiLabelFactory.clearAll();
      POI_layer ? _map.removeLayer(POI_layer) : "";
      BK_layer ? _map.removeLayer(BK_layer) : "";
      FN_layer ? _map.removeLayer(FN_layer) : "";
      for (var i in otherMarker) {
        if (otherMarker[i].length > 0) {
          for (var j = 0; j < otherMarker[i].length; j++) {
            _map.removeLayer(otherMarker[i][j]);
          }
        }
      }
      for (var k in TypeData_Layer) {
        _map.removeLayer(TypeData_Layer[k]);
      }
      TypeData_Layer = {};
      POI_layer = null;
      BK_layer = null;
      FN_layer = null;
    }

    function _on(action, callback) {
      if (!_Events[action]) {
        _Events[action] = [];
      }
      _Events[action].push(callback);
    }

    function _off(action, callback) {
      if (_Events[action]) {
        for (var i = 0; i < _Events[action].length; i++) {
          if (callback == _Events[action][i]) {
            _Events[action].splice(i, 1);
            return;
          }
        }
      }
    }

    function _getNowFloor() {
      return _nowFloor;
    }

    function _getPoiByNum(floor, num) {
      for (var i in TypeData_Layer) {
        var childLayers = TypeData_Layer[i].getLayers();
        for (var j = 0; j < childLayers.length; j++) {
          if (childLayers[j].poiNo == num)
            return childLayers[j];
        }
      }
    }

    function _getPoiByName(floor, name) {
      for (var i in TypeData_Layer) {
        var childLayers = TypeData_Layer[i].getLayers();
        for (var j = 0; j < childLayers.length; j++) {
          if (childLayers[j].feature.properties.name_chinese.toUpperCase() == name.toUpperCase())
            return childLayers[j];
          //若店铺号相同,也返回
          if (childLayers[j].feature.properties.store_id == name)
            return childLayers[j];
          //若名称中包含&，并且名称以name开头
          if (childLayers[j].feature.properties.name_chinese.indexOf(name) == 0 && childLayers[j].feature.properties.name_chinese.indexOf("&") > 0)
            return childLayers[j];
          //若poi_no相同，也返回
          if (childLayers[j].feature.properties.poi_no == name)
            return childLayers[j];
        }
      }
    }

    function _changeFloorTo(f, dashboardMark, callback) {
      _page.Scene.clearAll();
      f = f.toLowerCase();
      _renderFloor(f, callback, dashboardMark);
      _Events._call("changeFloor", arguments);
    }

    function _initMap(_option, callback) {
      if (_map) {
        return;
      }
      var that = this;
      var option = _option || {};
      option.crs = option.crs || L.CRS.EPSG3395;
      option.center = option.center || [-50, 115];
      option.zoom = option.zoom || 1;
      option.zoomControl = option.zoomControl || false;
      var center = L.CRS.EPSG3395.projection.unproject(new L.Point(115, -35));
      var drawMoreRatio = 1; //地图多绘制屏幕比例
      var inertia = false;
      var noMoveStart = false;
      Rtmap.Scene.maxZoom = 22;
      if (navigator.userAgent.indexOf("iPhone") != -1) {
        noMoveStart = false;
        inertia = true;
        //地图多绘制屏幕比例
        drawMoreRatio = 1;
      } else {
        noMoveStart = true;
        inertia = false;
        //地图多绘制屏幕比例
        drawMoreRatio = 0.2;
      }
      //leaflet1.0
      var canvas = L.svg();
      canvas.options.padding = drawMoreRatio;

      _map = new L.Map(option.parentDOM, {
        crs: L.CRS.EPSG3395,
        center: center,
        zoom: 16,
        minZoom: 16,
        maxZoom: 22,
        zoomControl: false,
        attributionControl: false,
        bounceAtZoomLimits: false,
        doubleClickZoom: false,
        inertia: inertia, //惯性平滑
        noMoveStart: noMoveStart,
        //preferCanvas: true,
        renderer: canvas,
        zoomDelta: 0.2,
        zoomSnap: 0 //无级缩放
      });
      _map._drawMoreRatio = drawMoreRatio;
      _bindEventToMap();
      _parentDOM = $("#" + option.parentDOM);
      return this;
    }

    function _panBy(ary) {
      _map.panBy(ary);
    }

    function _createMarker(json) {
      var latlng;
      if (json.Lat && json.Lng) {
        var latlng = new L.Point(json.Lat, json.Lng);
      } else if (json.x && json.y) {
        var latlng = L.CRS.EPSG3395.projection.unproject(new L.Point(json.x, json.y));
      } else {
        return false;
      }
      var marker;
      if (json.type == "circle") {
        json.color = json.color || "#1e6ac0";
        json.fillColor = json.fillColor || "#1e6ac0";
        marker = L.circleMarker(latlng, json).addTo(_map);
      } else {
        var blueIconUrl = _page.Style.getGlobalConfig("normal_icon_url");
        var _blueIcon = L.icon({
          iconUrl: blueIconUrl,
          iconRetinaUrl: blueIconUrl,
          iconSize: [30, 30],
          iconAnchor: [15, 30],
          shadowSize: [68, 95],
          shadowAnchor: [22, 94]
        });
        json.icon = json.icon || _blueIcon;
        marker = L.marker(latlng, json).addTo(_map);
      }
      json.floor = json.floor || Rtmap.Scene.getNowFloor().toLowerCase();
      if (!otherMarker[json.floor]) {
        otherMarker[json.floor] = [];
      }
      otherMarker[json.floor].push(marker);
      return marker;
    }

    function _addExistMarker(marker, floor) {
      if (!otherMarker[floor]) {
        otherMarker[floor] = [];
      }
      otherMarker[floor].push(marker);
    }

    function _createLine(json, option) {
      var latlngs = [];
      if (json.PointA.Lat && json.PointA.Lng) {
        var latlngA = new L.Point(json.pointA.Lat, json.pointA.Lng);
        var latlngB = new L.Point(json.pointB.Lat, json.pointB.Lng);
        latlngs.push(latlngA, latlngB);
      } else if (json.PointA.x && json.PointA.y) {
        var latlngA = L.CRS.EPSG3395.projection.unproject(new L.Point(json.PointA.x, json.PointA.y));
        var latlngB = L.CRS.EPSG3395.projection.unproject(new L.Point(json.PointB.x, json.PointB.y));
        latlngs.push(latlngA, latlngB);
      } else {
        return false;
      }
      var polyline = L.polyline(latlngs, {
        color: 'red'
      }).addTo(_map);
      if (!otherMarker[json.floor]) {
        otherMarker[json.floor] = [];
      }
      otherMarker[json.floor].push(polyline);
      return polyline;
    }

    _on("changeFloor", function (floor) {
      if (!otherMarker[floor]) {
        return;
      }
      for (var i = 0; i < otherMarker[floor].length; i++) {
        _map.addLayer(otherMarker[floor][i]);
      }
    });

    //专题数据空间查询(针对点)
    function _spatialQueryTypeData(latlng) {
      //var t1 = new Date().getTime();
      if (!latlng) return;
      var labelLayers = Rtmap.PoiLabelFactory.getLabelLayers();
      for (var i = 0; i < labelLayers.length; i++) {
        var label = labelLayers[i];
        if (label._nowLayer._latlng && label.show) {
          var bound = label.getBounds();
          if (bound.contains(latlng)) {
            //var testRect = L.rectangle([bound.getSouthWest(), bound.getNorthEast()], { color: "#ff7800", weight: 1 }).addTo(Rtmap.Scene.getMap());
            //var t2 = new Date().getTime();
            //console.log((t2 - t1) / 1000.00);
            return label._nowLayer;
          }
        }
      }
      //var t2 = new Date().getTime();
      //console.log((t2 - t1) / 1000.00);
    }

    //override from leaflet ,to make map see more large(for shopping view 商场)
    function _fitBounds(bounds, options) {
      options = options || {};
      bounds = bounds.getBounds ? bounds.getBounds() : L.latLngBounds(bounds);
      var paddingTL = L.point(options.paddingTopLeft || options.padding || [0, 0]),
        paddingBR = L.point(options.paddingBottomRight || options.padding || [0, 0]),

        zoom = _map.getBoundsZoom(bounds, false, paddingTL.add(paddingBR)) + 1,
        paddingOffset = paddingBR.subtract(paddingTL).divideBy(2),
        swPoint = _map.project(bounds.getSouthWest(), zoom),
        nePoint = _map.project(bounds.getNorthEast(), zoom),
        center = _map.unproject(swPoint.add(nePoint).divideBy(2).add(paddingOffset), zoom);
      zoom = options && options.maxZoom ? Math.min(options.maxZoom, zoom) : zoom;
      return _map.setView(center, zoom, options);
    };

    function _fitGeoBounds(geo, noZoomTo) {
      if (geo) {
        _map.fitBounds(geo.getBounds().pad(0.5));
        return true;
      } else {
        _map.options.minZoom = 15;
        var _bLarge = false;
        if (_buildBounds.left && _buildBounds.top) {
          var pointA = new L.Point(_buildBounds.left, _buildBounds.top);
          var pointB = new L.Point(_buildBounds.right, _buildBounds.bottom);
          //场景是否大于500
          if (Math.abs(_buildBounds.right - _buildBounds.left) > 500 || Math.abs(_buildBounds.top - _buildBounds.bottom) > 500) {
            _bLarge = true;
          }
          var latlngA = L.CRS.EPSG3395.projection.unproject(pointA);
          var latlngB = L.CRS.EPSG3395.projection.unproject(pointB);
          var line = L.polyline([latlngA, latlngB]);
          var d = _map.getBoundsZoom(line.getBounds(), true);
          if (!noZoomTo) {
            _map.fitBounds(line.getBounds());
          }
          _map.options.minZoom = d - 1;
          Rtmap.Scene.minZoom = d - 1;
          _page.Config.setup({
            largeScene: _bLarge
          });
          return true;
        }
      }
      return false;
    };

    return {
      clearAll: _clearAll,
      on: _on,
      off: _off,
      getNowFloor: _getNowFloor,
      getPoiByNum: _getPoiByNum,
      getPoiByName: _getPoiByName,
      changeFloorTo: _changeFloorTo,
      initMapContext: _initMap,
      panBy: _panBy,
      createMarker: _createMarker,
      addExistMarker: _addExistMarker,
      createLine: _createLine,
      eachPoiNameLayer: function (callback) {
        _page.PoiLabelFactory.eachLabel(callback)
      },
      getMap: function () {
        return _map;
      },
      setAllowPoiClick: function (isAllow) {
        _allowPoiClick = isAllow;
      },
      getNowZoomLevel: function () {
        var zoom = Rtmap.Scene.getMap().getZoom();
        var ratioZoom = parseInt((zoom - parseInt(zoom)) / 0.5) * 0.5;
        return parseInt(zoom) + ratioZoom;
      },
      fitBounds: _fitGeoBounds,
      getParentDOM: function () {
        return _parentDOM;
      },
      getBuildBounds: function () {
        return _buildBounds;
      },
      getCenter: function () {
        return {
          x: _buildBounds.centerX,
          y: _buildBounds.centerY
        }
      },
      moveToCenter: function (zoom) {
        var c = this.getCenter();
        var center = L.CRS.EPSG3395.projection.unproject(new L.Point(c.x, c.y));
        _map.setView(center, zoom);
      },
      moveTo: function (json, zoom) {
        var latlng;
        if (typeof (json.Lat) != "undefined" && typeof (json.Lng) != "undefined") {
          var latlng = new L.Point(json.Lat, json.Lng);
        } else if (typeof (json.x) != "undefined" && typeof (json.y) != "undefined") {
          var latlng = L.CRS.EPSG3395.projection.unproject(new L.Point(json.x, json.y));
        } else {
          return false;
        }
        _map.setView(latlng, zoom);
      },
      setZoom: function (num) {
        _map.setZoom(num);

      },
      addLayer: function (Layer) {
        _map.addLayer(Layer);
      },
      getLayer: function () {
        return POI_layer;
      },
      getFNLayer: function () {
        return FN_layer;
      },
      getBKLayer: function () {
        return BK_layer;
      },
      getTypeDataLayer: function () {
        return TypeData_Layer;
      },
      removeMarker: function (Layer) {
        Layer.animate ? Layer.animate.stop() : "";
        Layer ? _map.removeLayer(Layer) : "";
      },
      removeLayer: function (Layer, removeFromCache) {
        if (removeFromCache) {
          for (var i in otherMarker) {
            if (otherMarker[i].length > 0) {
              for (var j = 0; j < otherMarker[i].length; j++) {
                if (otherMarker[i][j] == Layer) {
                  otherMarker[i].splice(j, 1);
                }
              }
            }
          }
        }
        Layer ? _map.removeLayer(Layer) : "";
      },
      removeLayers: function (Layers) {
        for (var i = 0; i < Layers.length; i++) {
          Layers[i] ? _map.removeLayer(Layers[i]) : "";
        }
      },
      hideLayers: function ( /*array*/ Layers) {
        for (var i = 0; i < Layers.length; i++) {
          if (!Layers[i].show) continue;
          $(Layers[i]._container).addClass("hide");
          //$(Layers[i]._container).hide();
          Layers[i].show = false;
        }
      },
      showLayers: function ( /*array*/ Layers) {
        var length = Layers.length;
        for (var i = 0; i < length; i++) {
          if (Layers[i].show) continue;
          $(Layers[i]._container).removeClass("hide");
          //$(Layers[i]._container).show();
          Layers[i].show = true;
        }
      },
      createFN: function (FNData) {
        checkMap();
        FN_layer = L.geoJson(FNData, {
          style: {},
          filter: function (f, layer) {
            if (f.properties.style > 20)
              return false;
            else
              return true;
          },
          coordsToLatLng: function (coords) {
            var point = L.point(coords[0], coords[1]);
            var d = L.CRS.EPSG3395.projection.unproject(point);
            return d;
          },
          onEachFeature: function (f, layer) {
            if (Rtmap.Classification.customization == "true") {
              layer.setStyle(Rtmap.Classification.getLayerStyle(layer));
            } else {
              layer.setStyle(_page.Style.getStyleByPoiType(f.properties.style));
            }
          }
        }).addTo(_map);
        FN_layer.on("click", function (e) {
          if (_allowPoiClick) {
            //检索点状图层标注（解决点状图层无法选中的问题）
            var layer = _spatialQueryTypeData(e.latlng);
            _Events._call("poiClick", [e, layer])
            L.DomEvent.stopPropagation(e);
          }
        });
      },
      createBK: function (BKData) {
        checkMap();
        BK_layer = L.geoJson(BKData, {
          style: {},
          coordsToLatLng: function (coords) {
            var point = L.point(coords[0], coords[1]);
            var d = L.CRS.EPSG3395.projection.unproject(point);
            return d;
          },
          onEachFeature: function (f, layer) {
            if (Rtmap.Classification.customization == "true") {
              layer.setStyle(Rtmap.Classification.getLayerStyle(layer));

            } else {
              layer.setStyle(_page.Style.getStyleByPoiType(f.properties.style));
            }
            layer.on("click", function (e) {
              if (_allowPoiClick) {
                _Events._call("BKClick", [e]);
                //检索点状图层标注（解决点状图层无法选中的问题）
                var layer = _spatialQueryTypeData(e.latlng);
                _Events._call("poiClick", [e, layer])
                L.DomEvent.stopPropagation(e);
              }
            });
          }
        }).addTo(_map);
      },
      createPoi: function (poiData, bAddToMap) {
        checkMap();
        if (!poiData) {
          throw new Error("createPoi function need arguments!");
          return;
        }
        var nullGeoCount = 0;
        for (var i = 0; i < poiData.features.length; i++) {
          var f = poiData.features[i];
          if (!f.geometry) {
            nullGeoCount++;
          };
        }

        function _bindEventToLayer(f, layer) {
          var poiStyle = f.properties.style;
          layer.on({
            click: function (data) {
              if (_allowPoiClick) {
                _Events._call("poiClick", [data, layer])
                L.DomEvent.stopPropagation(data);
              }
            }
          });
        };
        var iCount = 0;
        POI_layer = L.geoJson(poiData, {
          crs: L.CRS.EPSG3395,
          style: {},
          coordsToLatLng: function (coords) {
            var point = L.point(coords[0], coords[1]);
            var d = L.CRS.EPSG3395.projection.unproject(point);
            return d;
          },
          onEachFeature: function (f, layer) {
            var name = f.properties['name_chinese'];
            var type = f.properties["style"];
            var poiNum = f.properties.poi_no;
            var layerId = layer._leaflet_id;
            if (name && name != "") {
              var point = L.point(f.properties.x_coord, f.properties.y_coord);
              var latlng = L.CRS.EPSG3395.projection.unproject(point);
              var nowZoom = Rtmap.Scene.getNowZoomLevel();
              var floor = Rtmap.Scene.getNowFloor();
              var showCacheLabel = Rtmap.PoiLabelFactory.getShowCacheLabel();
              if (!showCacheLabel || !showCacheLabel[floor]) {
                _page.PoiLabelFactory.addLabel({
                  latlng: latlng,
                  name: name,
                  type: type,
                  poiNum: poiNum,
                  two_class: f.properties.two_class,
                  layer: layer,
                  class_extension: f.properties.class_extension
                });
              } else {
                showCacheLabel[floor].labelmetalist ? "" : showCacheLabel[floor].labelmetalist = {};
                showCacheLabel[floor].labelmetalist[poiNum] = {
                  latlng: latlng,
                  name: name,
                  type: type,
                  poiNum: poiNum,
                  two_class: f.properties.two_class,
                  layer: layer,
                  class_extension: f.properties.class_extension
                };
              }
            }
            var poiStyle = f.properties.style;
            var floorName = Rtmap.Scene.getNowFloor();
            var floorDesc = Rtmap.Config.getFloorDesc(floorName);
            if (floorDesc.indexOf("停车场") > -1 && f.properties.two_class == "190308") { //车位
              layer.setStyle(Rtmap.Style.getParkingStatusStyle().normal);
            } else {
              layer.setStyle(Rtmap.Classification.getLayerStyle(layer));
            }
            layer.poiNo = poiNum;
            _bindEventToLayer(f, layer);
          }
        }); //.addTo(_map);
        TypeData_Layer["POI"] = POI_layer;
        POI_layer.hide = true;
        if (bAddToMap) {
          POI_layer.addTo(_map);
          POI_layer.hide = false;
        }
        //是否为捕获模式
        if (Page.capturemode)
          Rtmap.FeatureSelect.initCenterPoint();
      },
      createTypeData: function (typeData, typeName, show) {
        checkMap();
        if (!typeData) {
          throw new Error("createTypeData function need arguments!");
          return;
        }
        var nullGeoCount = 0;
        for (var i = 0; i < typeData.features.length; i++) {
          var f = typeData.features[i];
          if (!f.geometry) {
            nullGeoCount++;
          };
        }

        function _bindEventToLayer(f, layer) {
          var poiStyle = f.properties.style;
          layer.on({
            click: function (data) {
              if (_allowPoiClick) {
                _Events._call("poiClick", [data, layer])
                L.DomEvent.stopPropagation(data);
              }
            }
          });
        };
        var iCount = 0;
        var type_layer = L.geoJson(typeData, {
          crs: L.CRS.EPSG3395,
          style: {},
          coordsToLatLng: function (coords) {
            var point = L.point(coords[0], coords[1]);
            var d = L.CRS.EPSG3395.projection.unproject(point);
            return d;
          },
          onEachFeature: function (f, layer) {
            var name = f.properties['name_chinese'];
            var type = f.properties["style"];
            var poiNum = f.properties.poi_no;
            if (!POI_layer_childs[f.properties["floor"]]) {
              POI_layer_childs[f.properties["floor"]] = {};
            }
            var layerId = layer._leaflet_id;
            POI_layer_childs[f.properties["floor"]][poiNum] = layerId;
            if (name && name != "") {
              var point = L.point(f.properties.x_coord, f.properties.y_coord);
              var latlng = L.CRS.EPSG3395.projection.unproject(point);
              var nowZoom = Rtmap.Scene.getNowZoomLevel();
              var floor = Rtmap.Scene.getNowFloor();
              var showCacheLabel = Rtmap.PoiLabelFactory.getShowCacheLabel();
              if (!showCacheLabel || !showCacheLabel[floor]) {
                _page.PoiLabelFactory.addLabel({
                  latlng: latlng,
                  name: name,
                  type: type,
                  poiNum: poiNum,
                  two_class: f.properties.two_class,
                  layer: layer,
                  class_extension: f.properties.class_extension
                });
              } else {
                showCacheLabel[floor].labelmetalist ? "" : showCacheLabel[floor].labelmetalist = {};
                showCacheLabel[floor].labelmetalist[poiNum] = {
                  latlng: latlng,
                  name: name,
                  type: type,
                  poiNum: poiNum,
                  two_class: f.properties.two_class,
                  layer: layer,
                  class_extension: f.properties.class_extension
                };
              }
            }
            var poiStyle = f.properties.style;
            //点图层无此方法
            if (layer.setStyle) {
              var layerStyle = Rtmap.Classification.getLayerStyle(layer);
              layer.setStyle(layerStyle);
            }
            if (show) _bindEventToLayer(f, layer);
            layer.poiNo = poiNum;
            layer.dataType = typeName;
          }
        }) //.addTo(_map);
        if (show) {
          type_layer.addTo(_map);
          type_layer.addToMap = true;
        }
        TypeData_Layer[typeName] = type_layer;
        return type_layer;
      },
      //根据比例尺筛选图层
      filterLayersByZoom: function () {
        map = _page.Scene.getMap();
        var fnLayer = _page.Scene.getFNLayer();
        if (map._zoom < 16.2) {
          if (fnLayer && !fnLayer.hide) {
            map.removeLayer(fnLayer);
            fnLayer.hide = true;
          }
        } else {
          if (fnLayer && fnLayer.hide) {
            map.addLayer(fnLayer);
            fnLayer.hide = false;
          }
          Rtmap.TrackFactory.resetTrackLine();
        }
        if (map._zoom <= 17.2) {
          var typeDataLayers = _page.Scene.getTypeDataLayer();
          if (typeDataLayers["POI"] && !typeDataLayers["POI"].hide) {
            map.removeLayer(typeDataLayers["POI"]);
            typeDataLayers["POI"].hide = true;
          }

          if (typeDataLayers["traffic"] && !typeDataLayers["traffic"].hide) {
            map.removeLayer(typeDataLayers["traffic"]);
            typeDataLayers["traffic"].hide = true;
          }
          Rtmap.TrackFactory.resetTrackLine();
        } else if (map._zoom > 17.2) {
          var typeDataLayers = _page.Scene.getTypeDataLayer();
          if (typeDataLayers["POI"] && typeDataLayers["POI"].hide) {
            map.addLayer(typeDataLayers["POI"]);
            typeDataLayers["POI"].hide = false;
          }

          if (typeDataLayers["traffic"] && typeDataLayers["traffic"].hide) {
            map.addLayer(typeDataLayers["traffic"]);
            typeDataLayers["traffic"].hide = false;
          }
          Rtmap.TrackFactory.resetTrackLine();
        }
      }
    }
  })();

  _page.Style = (function () {
    var globalConfig = {
      canvas_color: "#fcffd5",
      focus_icon_url: "./public/img/red.png",
      font_color: "#000000",
      normal_icon_url: "./public/img/blue.png",
      start_icon_url: "./public/img/start.png",
      end_icon_url: "./public/img/end.png",
      /* start anJ*/
      wc_icon_url: "./public/img/wc.png",
      atm_icon_url: "./public/img/atm.png",
      cashier_desk_icon_url: "./public/img/cashier_desk.png",
      information_desk_icon_url: "./public/img/information_desk.png",
      elevator_icon_url: "./public/img/elevator.png",
      ladder_icon_url: "./public/img/escalator.png",
      stairway_icon_url: "./public/img/stairway.png",
      doorway_icon_url: "./public/img/doorway.png",
      restaurant_icon_url: "./public/img/restaurant.png",
      business_icon_url: "./public/img/supermarket.png",
      power_icon_url: "./public/img/supermarket.png",
      wc_red_icon_url: "./public/img/wc.png",
      atm_red_icon_url: "./public/img/atm.png",
      cashier_desk_red_icon_url: "./public/img/cashier_desk.png",
      information_desk_red_icon_url: "./public/img/information_desk.png",
      elevator_red_icon_url: "./public/img/elevator.png",
      ladder_red_icon_url: "./public/img/escalator.png",
      stairway_red_icon_url: "./public/img/stairway.png",
      doorway_red_icon_url: "./public/img/doorway.png",
      entertainment_icon_url: "./public/img/entertainment.png"
    };
    var imageConfig = {};
    var _styleList = {
      //3: {
      //    fillColor: "#efefef",
      //    color: "#333",
      //    weight: 3,
      //    opacity: 1,
      //    fillOpacity: 1
      //},
      //4: {
      //    fillColor: "#d5ebab",
      //    color: "#9bceb2",
      //    weight: 1,
      //    opacity: 1,
      //    fillOpacity: 1
      //},
      //5: {
      //    fillColor: "#fdc8c4",
      //    color: "#f4c3b4",
      //    weight: 1,
      //    opacity: 1,
      //    fillOpacity: 1,
      //    hover: {
      //        fillColor: "#ffb1ac",
      //        color: "#f4c3b4",
      //        weight: 1,
      //        opacity: 1
      //    }
      //},
      //6: {
      //    fillColor: "#ffeda0",
      //    color: "#ffeda0",
      //    weight: 1,
      //    opacity: 1,
      //    fillOpacity: 1
      //},
      //7: {
      //    fillColor: "#d5b9e9",
      //    color: "#678d88",
      //    weight: 1,
      //    opacity: 1,
      //    fillOpacity: 1
      //},
      //8: {
      //    fillColor: "#ddd",
      //    color: "#999",
      //    weight: 1,
      //    opacity: 1,
      //    fillOpacity: 1
      //},
      //12: {
      //    fillColor: "#ffeda0",
      //    color: "#ffeda0",
      //    weight: 1,
      //    opacity: 1,
      //    fillOpacity: 1
      //}
    };
    //停车区style的type为20
    var _parkingStatusStyle = {
      normal: { //正常
        type: 20,
        fillColor: "#f4f4f4",
        color: "#777777",
        weight: 0.5,
        opacity: 1,
        fillOpacity: 1
      },
      free: { //空位
        type: 20,
        fillColor: "#d8e0ca",
        color: "#97a869",
        weight: 0.5,
        opacity: 1,
        fillOpacity: 1
      },
      busy: { //使用中
        type: 20,
        fillColor: "#E97F7F",
        color: "#6e6e6e",
        weight: 0.5,
        opacity: 1,
        fillOpacity: 1
      },
      plan: { //预订
        type: 20,
        fillColor: "#5B65E8",
        color: "#6e6e6e",
        weight: 0.5,
        opacity: 1,
        fillOpacity: 1
      }
    };
    return {
      getStyleByPoiType: function (num) {
        if (num == 5) {
          //TODO:
        }
        return _styleList[num];
      },
      setPoiDefaultStyle: function (num, option) {
        _styleList[num] ? "" : _styleList[num] = {};
        for (var i in option) {
          _styleList[num][i] = option[i];
        }
      },
      setGlobalConfig: function (option) {
        for (var i in option) {
          option[i] ? globalConfig[i] = option[i] : "";
        }
      },
      getGlobalConfig: function (name) {
        return globalConfig[name];
      },
      setImageConfig: function (option) {
        for (var i in option) {
          option[i] ? imageConfig[i] = option[i] : "";
        }
      },
      getImageConfig: function (name) {
        return imageConfig[name];
      },
      getParkingStatusStyle: function () {
        return _parkingStatusStyle;
      }
    }
  })();

  /*
   * this module use to load and cache map data;
   */
  _page.DataProvider = (function () {
    var Cache = {};
    var option = {
      service: "WFS",
      version: "1.0.0",
      request: "getFeature",
      typeName: "rtmap:map_poi_862700010020300001_f1",
      maxFeatures: 5000,
      outputFormat: "text/javascript"
    }
    var Events = {};
    var floorsInfo = null;
    var getFloorsHandler;

    function setFloorsInfo(floorInfo) {
      floorsInfo = floorInfo;
      getFloorsHandler ? getFloorsHandler(floorInfo) : "";
    }

    function getFloorsInfo(handler) {
      if (floorsInfo) {
        handler(floorsInfo);
      } else {
        getFloorsHandler = handler;
      }
    }

    function _triggerEvent(action, ary) {
      if (Events[action]) {
        for (var i = 0; i < Events[action].length; i++) {
          Events[action][i].apply(this, ary);
        }
      }
    }

    function encodeJsonOld(text) {
      var a = 0;
      for (var i = 0; i < buildid.length; i++) {
        a += parseInt(buildid[i]);
      };
      var n = a % 10 + 10;
      var t = "";
      for (var i = 0; i < text.length; i++) {
        var z = i % n;
        var f = z ^ text[i].charCodeAt(0);
        t += String.fromCharCode(f);
      }
      try {
        var json = JSON.parse(t);
      } catch (e) {
        console.error("");
      }
      return json;
    }

    function encodeJson(text) {
      var size = text.length;
      var code = text[0].charCodeAt(0);
      var index = (size - 24) % code;
      index == 0 ? index += 1 : "";
      var tempText = text.substr(index + 1, 24);
      var _buildid;
      try {
        _buildid = atob(tempText);
      } catch (e) {
        //if no feature
        var jsonData = {};
        jsonData.type = "FeatureCollection";
        jsonData.features = [];
        jsonData.totalFeatures = 0;
        return jsonData;
      }
      Rtmap.Config.setup({
        buildId: _buildid
      });
      var buildid = Rtmap.Config.getOption().buildId;
      var regExp = new RegExp(tempText);
      text = text.replace(regExp, "");
      var a = 0;
      for (var i = 0; i < buildid.length; i++) {
        a += parseInt(buildid[i]);
      };
      var n = a % 10 + 10;
      var t = "";
      for (var i = 0; i < text.length; i++) {
        var z = i % n;
        var f = z ^ text[i].charCodeAt(0);
        t += String.fromCharCode(f);
      }
      try {
        var json = JSON.parse(t);
      } catch (e) {
        console.error("");
      }
      return json;
    }

    function _jsonpGet(jsonData, callback) {
      var requestData = {};
      var option = _page.Config.getOption();
      requestData.key = option.Key;
      var token = _page.Config.getOption().Token;
      token ? requestData.access_token = token : "";
      requestData.buildid = option.buildId;
      requestData.floor = jsonData.floor || option.defaultFloor;
      requestData.maptype = jsonData.type;
      requestData.codeType = 2;
      var timeStamp = new Date().getTime();
      if (Cache[jsonData.type] && Cache[jsonData.type][jsonData.floor]) {
        var data = Cache[jsonData.type][jsonData.floor];
        callback(data);
        return;
      }
      _triggerEvent("beforeGetPoi", [timeStamp])
      $.ajax({
        timeout: 60000,
        type: "POST",
        //url: "./data3/" + option.buildId + "_" + jsonData.floor + "_" + jsonData.type + ".json",
        url: "https://locateapi.rtmap.com/rtmap_lbs_api/v1/rtmap/floor_geojson",
        //url:"http://lbsapitest2.rtmap.com:8080/rtmap_lbs_api/v1/rtmap/floor_geojson",
        data: JSON.stringify(requestData),
        dataType: "text"
      }).done(function (data) {
        if (requestData.floor != Rtmap.Scene.getNowFloor()) {
          return;
        }
        data = encodeJson(data);
        if (data.result && data.result.error_code != "0") {
          alert(data.result.error_msg);
        } else {
          if (!Cache[jsonData.type]) {
            Cache[jsonData.type] = {};
          }
          Cache[jsonData.type][jsonData.floor] = data;
          callback(data);
        }
      }).error(function () {
        var after = new Date().getTime();
        _triggerEvent("afterGetPoi", [timeStamp, after])
      }).complete(function (e) {
        var after = new Date().getTime();
        _triggerEvent("afterGetPoi", [timeStamp, after])
      });
    }

    function _jsonpGetCDN(jsonData, callback, errorCallback) {
      var requestData = {};
      var option = _page.Config.getOption();
      requestData.key = option.Key;
      var token = _page.Config.getOption().Token;
      token ? requestData.access_token = token : "";
      requestData.buildid = option.buildId;
      requestData.floor = jsonData.floor || option.defaultFloor;
      requestData.maptype = jsonData.type;
      requestData.codeType = 2;
      var timeStamp = new Date().getTime();
      if (Cache[jsonData.type] && Cache[jsonData.type][jsonData.floor]) {
        var data = Cache[jsonData.type][jsonData.floor];
        callback(data);
        return;
      }
      _triggerEvent("beforeGetPoi", [timeStamp])
      $.ajax({
        timeout: 60000,
        type: "GET",
        url: "https://res.rtmap.com/map/data3/" + option.buildId + "_" + jsonData.floor + "_" + jsonData.type + ".json",
        //url: "./data3/" + option.buildId + "_" + jsonData.floor + "_" + jsonData.type + ".json",
        //data: JSON.stringify(requestData),
        //headers: { 'Accept-Encoding': 'gzip' },
        dataType: "json"
      }).done(function (data) {
        if (requestData.floor != Rtmap.Scene.getNowFloor()) {
          return;
        }
        //data = encodeJson(data);
        if (data.result && data.result.error_code != "0") {
          alert(data.result.error_msg);
        } else {
          if (!Cache[jsonData.type]) {
            Cache[jsonData.type] = {};
          }
          Cache[jsonData.type][jsonData.floor] = data;
          callback(data);
        }
      }).error(function () {
        var after = new Date().getTime();
        _triggerEvent("afterGetPoi", [timeStamp, after])
        errorCallback ? errorCallback() : ""; //
      }).complete(function (e) {
        var after = new Date().getTime();
        _triggerEvent("afterGetPoi", [timeStamp, after])
      });
    }

    function _jsonpGetLabelCache(callback, errorCallback) {
      var option = _page.Config.getOption();
      var dataFilePath = option.dataPath;
      if (!dataFilePath) {
        dataFilePath = "data";
      }
      $.ajax({
        timeout: 60000,
        type: "GET",
        url: "https://res.rtmap.com/map/labelcache/labelcache_" + option.buildId + ".json",
        //url: dataFilePath + "/labelcache_" + option.buildId  + ".json",
        //data: JSON.stringify(requestData),
        //headers: { 'Accept-Encoding': 'gzip' },
        dataType: "json"
      }).done(function (data) {
        callback(data);
      }).error(function () {
        errorCallback ? errorCallback() : ""; //
      }).complete(function (e) {});
    }

    function _getBuildInfo(jsonData, callback) {
      var requestData = {};
      requestData.key = _page.Config.getOption().Key;
      var token = _page.Config.getOption().Token;
      token ? requestData.access_token = token : "";
      requestData.buildid = jsonData.buildId || _page.Config.getOption().buildId;
      requestData.map_version = $("#map_version").attr("value");
      var timeStamp = new Date().getTime();
      _triggerEvent("beforGetBuildInfo", [timeStamp]);
      $.ajax({
        type: "POST",
        url: "https://locateapi.rtmap.com/rtmap_lbs_api/v1/rtmap/build_detail",
        //url:"http://lbsapitest2.rtmap.com:8080/rtmap_lbs_api/v1/rtmap/build_detail",//test url
        data: JSON.stringify(requestData),
        dataType: "json",
      }).done(function (data) {
        if (data.result.error_code == "0") {
          _page.Config.setup({
            vendorDetailUrl: data.build_detail.url
          });
          _page.Config.setup({
            poiDetialType: data.build_detail.type
          });
          setFloorsInfo(data.build_detail.floorinfo);
          callback ? callback(null, data.build_detail) : "";
        } else {
          alert(data.result.error_msg);
          callback ? callback("get Data error") : "";
        }
      }).complete(function () {
        _triggerEvent("afterGetBuildInfo", [timeStamp])
      });
    };

    function _getCustomConfigData(jsonData, callback) {
      var result = {};
      $.ajax({
        url: _jsonData.buildId + "_config.json",
        async: false,
        dataType: "text",
        success: function (data) {
          try {
            result = JSON.parse(data);
            result.customization = "true";
          } catch (e) {
            console.log("配置文件数据异常，请检查并保证是正常的JSON数据格式");
            result = classification;
            result.customization = "false";
          }
          callback ? callback(result) : "";
        },
        error: function (e) {
          console.log(e.status + "\n" + e.statusText + "\n" + "使用默认方案");
          result = classification;
          result.customization = "false";
          callback ? callback(result) : "";
        }
      });
      return result;
    }

    return {
      getBuildInfo: _getBuildInfo,
      on: function (action, func) {
        if (!Events[action]) {
          Events[action] = [];
        }
        Events[action].push(func);
      },
      getTypeData: function (json, type, callback) {
        _jsonpGetCDN({
          "type": type,
          floor: json.floor
        }, function (data) {
          callback(data);
        });
      },
      getPoi: function (json, callback) {
        _jsonpGet({
          "type": "poi",
          floor: json.floor
        }, function (data) {
          if (data.features.length == 0) {
            //if (data.totalFeatures < 1 || !data.totalFeatures) {
            /*
            getFloorsInfo(function (data) {
                var floor = Page.URL.getParameter("floor");
                if (data[0].floor.toUpperCase() != json.floor.toUpperCase()) {
                    if (floor)
                        Page.Controller.DialogLabel.show("楼层" + json.floor + "没有数据，为您切换到楼层" + data[0].floor + "！", 2000);
                    Rtmap.Scene.changeFloorTo(data[0].floor);
                }
                else {
                    Page.Controller.DialogLabel.show("当前建筑物没有数据，请联系智慧图工作人员！", 2000);
                }
            });
            */
          } else {
            callback(data);
          };
        });
      },

      getFN: function (json, callback) {
        _jsonpGet({
          "type": "fn",
          floor: json.floor
        }, callback);
      },
      getBK: function (json, callback) {
        _jsonpGet({
          "type": "bk",
          floor: json.floor
        }, callback);
      },
      getBKCDN: function (json, callback, errorCallback) {
        _jsonpGetCDN({
          "type": "bk",
          floor: json.floor
        }, callback, errorCallback);
      },
      getFNCDN: function (json, callback) {
        _jsonpGetCDN({
          "type": "basic",
          floor: json.floor
        }, callback);
      },
      getPoiCDN: function (json, callback) {
        _jsonpGetCDN({
          "type": "shopping",
          floor: json.floor
        }, function (data) {
          callback(data);
        });
      },
      getTypeDataCDN: function (json, type, callback) {
        _jsonpGetCDN({
          "type": type,
          floor: json.floor
        }, function (data) {
          callback(data);
        });
      },
      getCustomConfigData: _getCustomConfigData,
      jsonpGetLabelCache: _jsonpGetLabelCache,
      clearCache: function (type, floor) {
        if (Cache[type] && Cache[type][floor]) {
          Cache[type][floor] = {};
        }
      }
    }
  })();

  //use to create Track
  _page.TrackFactory = (function () {
    var _Start = {
      Poi: null,
      Marker: null,
      floor: null,
      x_coord: null,
      y_coord: null
    }
    var _End = {
      Poi: null,
      Marker: null,
      floor: null
    }
    var routePoint = null;
    var Events = {};
    var _routePoiArray = null; //返回的所有路径点
    var _PoiList = {};
    var _startLine = null;
    var _trackLine = null;
    var _endLine = null;
    var _extendLine = null; //同一楼层中的另外一段导航线
    var _currentTrackLine = null; //路书切换时的当前路径线
    var _to_floor_marker = null; //电梯，楼梯切换提示marker;
    var _from_floor_marker = null; //电梯，楼梯切换提示marker;
    var _to_floor_ext_marker = null; //扩展电梯，楼梯切换提示marker(同一楼层，存在两段线的时候);
    var _from_floor_ext_marker = null; //扩展电梯，楼梯切换提示marker(同一楼层，存在两段线的时候);
    var _locationTargetLine = null;

    var _to_floor_popup = null;
    var ajaxRequest = null;
    var haveTrack = false;
    var _ajaxRequestResult = null;

    function _addStartMarker(startPointType) {
      var iconUrl = _page.Style.getGlobalConfig("start_icon_url");
      var iconRetinaUrl = _page.Style.getGlobalConfig("start_icon_url");
      if (startPointType) {
        if (startPointType == "car") {
          iconUrl = "./public/img/car.png";
          iconRetinaUrl = "./public/img/car.png";
        }
      }
      var _startIcon = L.icon({
        iconUrl: iconUrl,
        iconRetinaUrl: iconRetinaUrl,
        iconSize: [40, 40],
        iconAnchor: [20, 40], //caoyy 起点居中
        shadowSize: [68, 95],
        shadowAnchor: [22, 94]
      });
      var point = new L.Point(_Start.x_coord, _Start.y_coord);
      var latlng = L.CRS.EPSG3395.projection.unproject(point);
      _Start.Marker ? _page.Scene.removeLayer(_Start.Marker) : "";
      _Start.Marker = L.marker(latlng, {
        icon: _startIcon
      }); //.addTo(_map);
      if (_Start.floor == _page.Scene.getNowFloor()) {
        _page.Scene.addLayer(_Start.Marker);
      }
    }

    function _addEndMarker(layer, endPointType) {
      var iconUrl = _page.Style.getGlobalConfig("end_icon_url");
      var iconRetinaUrl = _page.Style.getGlobalConfig("end_icon_url");
      if (endPointType) {
        if (endPointType == "car") {
          iconUrl = "./public/img/car.png";
          iconRetinaUrl = "./public/img/car.png";
        }
      }
      var _endIcon = L.icon({
        iconUrl: iconUrl,
        iconRetinaUrl: iconRetinaUrl,
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        shadowSize: [0, 0],
        shadowAnchor: [22, 94]
      });
      var point = new L.Point(_End.x_coord, _End.y_coord);
      var latlng = L.CRS.EPSG3395.projection.unproject(point);
      _End.Marker ? _page.Scene.removeLayer(_End.Marker) : "";
      _End.Marker = L.marker(latlng, {
        icon: _endIcon
      }); //.addTo(_map);
      if (_End.floor == _page.Scene.getNowFloor()) {
        _page.Scene.addLayer(_End.Marker);
        _End.Marker.update();
      };
      //清除橡皮筋
      Page.wechat.clearLocationTargetLine ? Page.wechat.clearLocationTargetLine() : "";
    }

    function _triggerEvent(action, ary) {
      if (Events[action]) {
        for (var i = 0; i < Events[action].length; i++) {
          Events[action][i].apply(this, ary);
        }
      }
    }

    function _requestTrackFromNewServer(callback) {
      function createRequestHeaderJson() {
        var temp = {};
        temp.key = _page.Config.getOption().Key;
        var token = _page.Config.getOption().Token;
        token ? temp.access_token = token : "";
        var x_start = _Start.x_coord,
          y_start = _Start.y_coord,
          x_end = _End.x_coord,
          y_end = _End.y_coord;
        _page.Config.getOption().openId ? temp.user_id = _page.Config.getOption().openId : "";
        temp.buildid = _page.Config.getOption().buildId;
        temp.pointlist = [{
            floor: _Start.floor,
            x: x_start,
            y: -y_start
          },
          {
            floor: _End.floor,
            x: x_end,
            y: -y_end
          }
        ];
        routePoint ? temp.route_pointlist = routePoint : "";
        temp.need_name = true;
        return JSON.stringify(temp);
      }
      if (_Start.Poi && _End.Poi && (_Start.Poi != _End.Poi)) {
        var requestHeader = createRequestHeaderJson();
        _triggerEvent("beforeRequest");
        _clearTrackLine();
        //导航埋点
        if (window.buriedpoint) {
          window.buriedpoint.navigation_route(_Start, _End);
        }
        $.ajax({
          timeout: 30000,
          type: "POST",
          url: "https://locateapi.rtmap.com/rtmap_lbs_api/v2/rtmap/navigation",
          //url: "http://lbsapitest2.rtmap.com:8080/rtmap_lbs_api/v2/rtmap/navigation",// test url
          data: requestHeader,
        }).done(function (data) {
          if (data.result.error_code == "0") {
            var ary = data.pointlist;
            _routePoiArray = data.pointlist;
            var length = ary.length;
            while (length--) {
              var temp = ary[length];
              temp.x_indoor = parseInt(temp.x) / 1000;
              temp.y_indoor = parseInt(temp.y) / 1000;
            }
            _PoiList = _parsePath(ary);
            _PoiList ? _triggerEvent("successTrack", [_PoiList, data.distance]) : "";
            window.Page.loading ? window.Page.loading.show() : ""; //开启进度条
            if (_Start.floor != _page.Scene.getNowFloor()) {
              _page.Scene.changeFloorTo(_Start.floor);
            } else {
              _drawPath();
            }
            //清除当前聚焦线
            if (_currentTrackLine && _currentTrackLine.hasfit) {
              _clearCTrackLine();
            }
          } else {
            //ZS 去除导航出错提示
            //alert(data.result.error_msg);
            alert("网络正常,无法路径规划:" + requestHeader);
          }
          _ajaxRequestResult = data;
          //回调函数
          callback ? callback(data) : "";
        }).error(function (data) {
          //alert("网络错误:" + requestHeader);
          callback ? callback(data) : "";
        }).complete(function () {
          _triggerEvent("afterRequest")
        });
      } else if (haveTrack) {
        _clearTrackLine();
        haveTrack = false;
      }
    }

    function _createNewFloorData() {
      return {
        to_floor: null,
        endPOI: null,
        points: []
      };
    };

    function _parsePath(ary) {
      var poiPath = {};
      var tempFloor = null;
      var latlngs = [];
      var cursor = 0;
      var prevFloor = null;
      var prevPOI = null;
      for (var i = 0; i < ary.length; i++) {
        var temp = ary[i];
        var point = new L.Point(temp.x_indoor, -temp.y_indoor);
        var poi_latlng = L.CRS.EPSG3395.projection.unproject(point);

        if (temp.floor.toLowerCase() != tempFloor) { //new floor;
          if (prevFloor) {
            prevFloor.next_floor = temp.floor.toLowerCase();
            prevFloor.endPOI = {
              name: prevPOI,
              poiInfo: temp,
              lastPoiInfo: ary[i - 1]
            };
          }
          tempFloor = temp.floor.toLowerCase();
          if (!poiPath[tempFloor]) {
            poiPath[tempFloor] = _createNewFloorData()
            poiPath[tempFloor].floor = tempFloor;
            prevFloor ? poiPath[tempFloor].prev_floor = prevFloor.floor : "";
            prevFloor = poiPath[tempFloor];
          } else {
            //同一楼层有两段导航线的情况
            poiPath[tempFloor].extend_points = [];
            //同一楼层时增加一个PATH点
            var extendRoute = tempFloor + "-" + "1";
            poiPath[tempFloor].extendRoute = extendRoute;
            poiPath[extendRoute] = _createNewFloorData()
            poiPath[extendRoute].floor = tempFloor;
            poiPath[extendRoute].extend_points = poiPath[tempFloor].points;
            prevFloor ? poiPath[extendRoute].prev_floor = prevFloor.floor : "";
            prevFloor = poiPath[extendRoute];
            poiPath[poiPath[extendRoute].prev_floor].next_floor = extendRoute;
          }
        }
        prevPOI = temp.poi_name;
        if (i == 0) {
          var point = new L.Point(_Start.x_coord, _Start.y_coord);
          var startLatlng = L.CRS.EPSG3395.projection.unproject(point);
          startLatlng.rt_attr = 0;
          poiPath[tempFloor].points.push(startLatlng);
        }

        //添加到衍生点集合，同一楼层有两段导航线的情况
        if (poiPath[tempFloor].extend_points) {
          poiPath[tempFloor].extend_points.push(poi_latlng);
          //同一楼层时增加一个PATH点
          var extendRoute = poiPath[tempFloor].extendRoute;
          poiPath[extendRoute].points.push(poi_latlng);
        } else {
          poiPath[tempFloor].points.push(poi_latlng);
        }

        if (i == ary.length - 1) {
          var point = new L.Point(_End.x_coord, _End.y_coord);
          var endLatlng = L.CRS.EPSG3395.projection.unproject(point);
          endLatlng.rt_attr = 1;
          poiPath[tempFloor].points.push(endLatlng);
        }
      }
      return poiPath;
    }

    function _drawPath(floorMark) {
      var f = _page.Scene.getNowFloor();
      if (!_PoiList[f]) {
        _triggerEvent("drawPath");
        return;
      };
      var ary = _PoiList[f].points;
      _trackLine ? _page.Scene.removeLayer(_trackLine) : "";
      _startLine ? _page.Scene.removeLayer(_startLine) : "";
      _endLine ? _page.Scene.removeLayer(_endLine) : "";
      _extendLine ? _page.Scene.removeLayer(_extendLine) : "";
      _to_floor_popup ? _page.Scene.removeLayer(_to_floor_popup) : "";
      _to_floor_marker ? _page.Scene.removeLayer(_to_floor_marker) : "";
      _from_floor_marker ? _page.Scene.removeLayer(_from_floor_marker) : "";
      _to_floor_ext_marker ? _page.Scene.removeLayer(_to_floor_ext_marker) : "";
      _from_floor_ext_marker ? _page.Scene.removeLayer(_from_floor_ext_marker) : "";
      _extendLine = null;
      _to_floor_marker = null;
      _from_floor_marker = null;
      _to_floor_ext_marker = null;
      _from_floor_ext_marker = null;

      if (ary[0].rt_attr == 0) { //customer add point
        var a = ary[0],
          b = ary[1];
        _startLine = L.polyline([a, b], {
          color: "#1b1b60",
          dashArray: [5, 5],
          weight: 6,
          opacity: 0.8,
          className: "wha",
          renderer: L.svg()
        });
        _page.Scene.addLayer(_startLine);
        var ary = ary.concat();
        ary.splice(0, 1);
      }
      if (ary[ary.length - 1].rt_attr == 1) { //customer add point
        var a = ary[ary.length - 2],
          b = ary[ary.length - 1];
        if (_PoiList[f].extend_points) {
          var ary_Extend = _PoiList[f].extend_points;
          a = ary_Extend[ary_Extend.length - 2];
          b = ary_Extend[ary_Extend.length - 1];
        }
        _endLine = L.polyline([a, b], {
          color: "#1b1b60",
          dashArray: [5, 5],
          weight: 6,
          opacity: 0.8,
          className: "wha",
          renderer: L.svg()
        });
        _page.Scene.addLayer(_endLine);
        var ary = ary.concat();
        ary.splice(ary.length - 1, 1);
      }
      var _temptrackLine = L.polyline(ary, {
        color: "#1b1b60",
        weight: 6,
        opacity: 0.8,
        className: "wha",
        renderer: L.svg()
      });
      _trackLine = L.curveUtil.createCurveFromLatlngs(_page.Scene.getMap(), _temptrackLine.getLatLngs(), {
        color: "#1b1b60",
        weight: 6,
        opacity: 0.8,
        className: "wha",
        renderer: L.svg()
      });
      _trackLine.setText("＞", {
        repeat: !0,
        offset: 3,
        attributes: {
          "letter-spacing": "20px",
          fill: "white",
          "font-weight": "normal",
          "font-size": "7"
        }
      });
      _page.Scene.addLayer(_trackLine);

      if (_PoiList[f].extend_points) {
        floorMark ? "" : floorMark = f + "-1";
        var ary_Extend = _PoiList[f].extend_points;
        var _tempextendLine = L.polyline(ary_Extend, {
          color: "#1b1b60",
          weight: 6,
          opacity: 0.8,
          className: "wha",
          renderer: L.svg()
        });
        _extendLine = L.curveUtil.createCurveFromLatlngs(_page.Scene.getMap(), _tempextendLine.getLatLngs(), {
          color: "#1b1b60",
          weight: 6,
          opacity: 0.8,
          className: "wha",
          renderer: L.svg()
        });
        _extendLine.setText("＞", {
          repeat: !0,
          offset: 3,
          attributes: {
            "letter-spacing": "20px",
            fill: "white",
            "font-weight": "normal",
            "font-size": "7"
          }
        });
        _page.Scene.addLayer(_extendLine);
        //
        var imageUrl = _getImagePath();
        var myIcon = _createIcon(imageUrl);
        _from_floor_ext_marker = L.marker(_extendLine.getLatLngs()[0], {
          icon: myIcon
        });
        _page.Scene.addLayer(_from_floor_ext_marker);

        var imageUrl2 = null;
        var myIcon2 = null;
        var endPoint = _PoiList[floorMark].endPOI;
        if (endPoint) {
          endPoint.poiInfo ? imageUrl2 = _getImagePath(endPoint.poiInfo) : imageUrl2 = _getImagePath();
          myIcon2 = _createIcon(imageUrl2);
          _to_floor_ext_marker = L.marker(_extendLine.getLatLngs()[_extendLine.getLatLngs().length - 1], {
            icon: myIcon2
          });
          _page.Scene.addLayer(_to_floor_ext_marker);
          var floorDesc = _replaceFloorAliasName(endPoint.poiInfo.desc);
          _to_floor_ext_marker.bindPopup(floorDesc, {
            autoPan: false
          }).openPopup();
        } else {
          imageUrl2 = _getImagePath();
          myIcon2 = _createIcon(imageUrl2);
          _to_floor_ext_marker = L.marker(_extendLine.getLatLngs()[_extendLine.getLatLngs().length - 1], {
            icon: myIcon2
          });
          _page.Scene.addLayer(_to_floor_ext_marker);
        }

      }

      //切换楼层起点
      if (_trackLine && _trackLine._map) {
        var endPoint = _PoiList[f].endPOI;
        if (endPoint) {
          if (endPoint.poiInfo) {
            var imageUrl = _getImagePath(endPoint.poiInfo);
            var myIcon = _createIcon(imageUrl);
            var point = new L.Point(endPoint.lastPoiInfo.x_indoor, -endPoint.lastPoiInfo.y_indoor);
            var poi_latlng = L.CRS.EPSG3395.projection.unproject(point);
            _to_floor_marker = L.marker(_trackLine.getLatLngs()[_trackLine.getLatLngs().length - 1], {
              icon: myIcon
            });
            _page.Scene.addLayer(_to_floor_marker);
            var floorDesc = _replaceFloorAliasName(endPoint.poiInfo.desc);
            _to_floor_marker.bindPopup(floorDesc, {
              autoPan: false
            }).openPopup();
          }
        }

        if (_End.floor.toUpperCase() != _Start.floor.toUpperCase() &&
          Rtmap.Scene.getNowFloor().toUpperCase() != _Start.floor.toUpperCase()) { //起终点不在一个楼层，当前楼层为终点，且存在两条导航线时
          var imageUrl = _getImagePath();
          var myIcon = _createIcon(imageUrl);
          _from_floor_marker = L.marker(_trackLine.getLatLngs()[0], {
            icon: myIcon
          });
          _page.Scene.addLayer(_from_floor_marker);
        }
      }

      haveTrack = true;
      if (!floorMark && _PoiList[f].extend_points) {
        _triggerEvent("drawPath", [_PoiList, _trackLine]);
        return;
      }
      //若传入标志
      if (floorMark && floorMark.indexOf("-") > 0 && _extendLine)
        _triggerEvent("drawPath", [_PoiList, _extendLine]);
      else
        _triggerEvent("drawPath", [_PoiList, _trackLine]);
    }

    function _clearAllLayer() {
      _to_floor_popup ? _page.Scene.removeLayer(_to_floor_popup) : "";
      _locationTargetLine ? _page.Scene.removeLayer(_locationTargetLine) : "";
      _clearStartPoi();
      _clearEndPoi();
      _clearTrackLine();
      _clearCTrackLine();
    }

    function _clearAllUI() {
      _Start.Marker ? _page.Scene.removeLayer(_Start.Marker) : "";
      _End.Marker ? _page.Scene.removeLayer(_End.Marker) : "";
      _trackLine ? _page.Scene.removeLayer(_trackLine) : "";
      _startLine ? _page.Scene.removeLayer(_startLine) : "";
      _endLine ? _page.Scene.removeLayer(_endLine) : "";
      _extendLine ? _page.Scene.removeLayer(_extendLine) : "";
      _to_floor_marker ? _page.Scene.removeLayer(_to_floor_marker) : "";
      _from_floor_marker ? _page.Scene.removeLayer(_from_floor_marker) : "";
    }

    _page.Scene.on("drawedMap", function (floor, floorMark) {
      _clearAllUI();
      _PoiList[floor] ? _drawPath(floorMark) : "";
      if (_page.Config.getOption().largeScene && _page.Config.getOption().loadModel == "cdn") {
        //按比例过滤数据
        _page.Scene.filterLayersByZoom();
      }
      //redraw overlayer
      if (_Start.Marker && floor == _Start.floor) {
        _page.Scene.addLayer(_Start.Marker);
      }
      if (_End.Marker && floor == _End.floor) {
        _page.Scene.addLayer(_End.Marker);
      }
      //清除橡皮筋
      Page.wechat.clearLocationTargetLine ? Page.wechat.clearLocationTargetLine() : "";
      //清除当前聚焦线
      if (_currentTrackLine && _currentTrackLine.hasfit) {
        if (_currentTrackLine.floor.toUpperCase() == floor.toUpperCase()) {
          _page.Scene.addLayer(_currentTrackLine);
        } else {
          _clearCTrackLine();
        }
      }
    });

    function _clearStartPoi() {
      _Start.Marker ? _page.Scene.removeLayer(_Start.Marker) : "";
      for (var i in _Start) {
        _Start[i] = null;
      }
    };

    function _clearEndPoi() {
      _End.Marker ? _page.Scene.removeLayer(_End.Marker) : "";
      for (var i in _End) {
        _End[i] = null;
      }
    };

    function _clearTrackLine() {
      _trackLine ? _page.Scene.removeLayer(_trackLine) : "";
      _startLine ? _page.Scene.removeLayer(_startLine) : "";
      _endLine ? _page.Scene.removeLayer(_endLine) : "";
      _extendLine ? _page.Scene.removeLayer(_extendLine) : "";
      routePoint = null;
      _to_floor_marker ? _page.Scene.removeLayer(_to_floor_marker) : "";
      _from_floor_marker ? _page.Scene.removeLayer(_from_floor_marker) : "";
      _to_floor_ext_marker ? _page.Scene.removeLayer(_to_floor_ext_marker) : "";
      _from_floor_ext_marker ? _page.Scene.removeLayer(_from_floor_ext_marker) : "";
    };

    //重置路径线,防止被其它图层压盖
    function _resetTrackLine() {
      if (_trackLine && _trackLine._map) {
        _page.Scene.removeLayer(_trackLine);
        _page.Scene.addLayer(_trackLine);
      }
      if (_startLine && _startLine._map) {
        _page.Scene.removeLayer(_startLine);
        _page.Scene.addLayer(_startLine);
      }
      if (_endLine && _endLine._map) {
        _page.Scene.removeLayer(_endLine);
        _page.Scene.addLayer(_endLine);
      }
      if (_extendLine && _extendLine._map) {
        _page.Scene.removeLayer(_extendLine);
        _page.Scene.addLayer(_extendLine);
      }
      if (_currentTrackLine && _currentTrackLine._map) {
        _page.Scene.removeLayer(_currentTrackLine);
        _page.Scene.addLayer(_currentTrackLine);
      }
      if (_locationTargetLine && _locationTargetLine._map) {
        _page.Scene.removeLayer(_locationTargetLine);
        _page.Scene.addLayer(_locationTargetLine);
      }
    };

    function _redrawCTrackLine(startPoi, endPoi, floor) {
      _clearCTrackLine();
      var startPoiIndex, endPoiIndex;
      for (var i = 0; i < _routePoiArray.length; i++) {
        if (_routePoiArray[i].floor == startPoi.floor &&
          _routePoiArray[i].x == startPoi.x &&
          _routePoiArray[i].y == startPoi.y) {
          startPoiIndex = i;
        }

        if (_routePoiArray[i].floor == endPoi.floor &&
          _routePoiArray[i].x == endPoi.x &&
          _routePoiArray[i].y == endPoi.y) {
          endPoiIndex = i;
        }
      }
      var array = [];
      //因转角平滑
      //if (startPoiIndex > 0) {
      //    startPoiIndex = startPoiIndex - 1;
      //}
      //if (endPoiIndex < _routePoiArray.length - 1) {
      //    endPoiIndex = endPoiIndex + 1;
      //}
      for (var i = startPoiIndex; i <= endPoiIndex; i++) {
        var point = new L.Point(_routePoiArray[i].x_indoor, -_routePoiArray[i].y_indoor);
        var latlng = L.CRS.EPSG3395.projection.unproject(point);
        array.push(latlng);
      }
      var _tempcurrentTrackLine = L.polyline(array, {
        color: "#E80A0A",
        weight: 6,
        opacity: 0.7,
        className: "wha",
        renderer: L.svg()
      });
      _currentTrackLine = L.curveUtil.createCurveFromLatlngs(_page.Scene.getMap(), _tempcurrentTrackLine.getLatLngs(), {
        color: "#E80A0A",
        weight: 6,
        opacity: 0.7,
        className: "wha",
        renderer: L.svg()
      }, 0.9);
      if (startPoiIndex == 0 && endPoiIndex == 1) { //若为第一段，则显示整 条导航线范围
        _currentTrackLine.willNoFit = true;
      }
      if (_page.Scene.getNowFloor().toUpperCase() == floor.toUpperCase()) {
        window.setTimeout(function () {
          if (_currentTrackLine) {
            if (!_currentTrackLine.willNoFit) {
              //_page.Scene.getMap().fitBounds(_currentTrackLine.getBounds().pad(0.2));
              _page.Scene.getMap().setView(_currentTrackLine.getBounds().getCenter());
            }
            _page.Scene.addLayer(_currentTrackLine);
            _currentTrackLine.hasfit = true;
            _currentTrackLine.floor = floor;
          }
          window.Page.loading ? window.Page.loading.hide() : ""; //关闭进度条
        }, 700);
      }
    };

    function _getCTrackLine() {
      return _currentTrackLine;
    }

    //绘制当路径段
    function _drawCTrackLine(startPoi, endPoi, floor) {
      //不合适
      window.locationModel = "free";
      Rtmap.Control.disableLocal(); //默认置灰
      if (_page.Scene.getNowFloor().toUpperCase() != floor.toUpperCase()) {
        window.Page.loading ? window.Page.loading.show() : ""; //开启进度条
        _page.Scene.changeFloorTo(floor, null, function () {
          _redrawCTrackLine(startPoi, endPoi, floor);
        });
      } else {
        _redrawCTrackLine(startPoi, endPoi, floor);
      }
    };

    //绘制当路径段
    function _clearCTrackLine() {
      if (_currentTrackLine && _currentTrackLine._map) {
        _page.Scene.removeLayer(_currentTrackLine);
        _currentTrackLine = null;
      }
    };

    //创建icon
    function _createIcon(imageUrl) {
      var myIcon = L.icon({
        iconUrl: imageUrl,
        iconRetinaUrl: imageUrl,
        iconSize: [30, 30],
        iconAnchor: [15, 15]
      });
      return myIcon;
    }

    //获取楼层切换上下图标
    function _getImagePath(poiInfo) {
      if (poiInfo) {
        var flag = "up";
        if (poiInfo.desc) {
          if (poiInfo.desc.indexOf("上行") > 0) {
            flag = "up";
          }
          if (poiInfo.desc.indexOf("下行") > 0) {
            flag = "down";
          }
        }
        if (poiInfo.poi_name.indexOf("电梯") > -1) {
          return "./public/img/elevator_" + flag + ".png";
        } else if (poiInfo.poi_name.indexOf("扶梯") > -1) {
          return "./public/img/escalator_" + flag + ".png";

        } else if (poiInfo.poi_name.indexOf("楼梯") > -1) {
          return "./public/img/stair_" + flag + ".png";
        }
      }
      return "./public/img/elevator.png";
    };

    //替换楼层别名
    function _replaceFloorAliasName(strRouteDesc) {
      var _floorData = _page.Config.getFloorData();
      for (var i = 0; i < _floorData.length; i++) {
        if (_floorData[i].floor_alias) {
          strRouteDesc = strRouteDesc.replace(_floorData[i].floor, _floorData[i].floor_alias);
        }
      }
      return strRouteDesc;
    }

    return {
      on: function (action, func) {
        if (!Events[action]) {
          Events[action] = [];
        }
        Events[action].push(func);
      },
      getStartPoi: function () {
        return _Start;
      },
      getEndPoi: function () {
        return _End;
      },
      setStartPoi: function (PoiLayer, startPointType) {
        if (!PoiLayer && Rtmap.Search.FocusResult) { //
          _Start.floor = Rtmap.Search.FocusResult.floor.toLowerCase();
          _Start.x_coord = Rtmap.Search.FocusResult.x;
          _Start.y_coord = Rtmap.Search.FocusResult.y;
          _Start.Poi = Rtmap.Search.FocusResult;
        } else {
          var properties = PoiLayer.feature ? PoiLayer.feature.properties : "";
          _Start.Poi = PoiLayer;
          if (properties) {
            _Start.floor = Rtmap.Scene.getNowFloor().toLowerCase() //properties.floor.toLowerCase();
            _Start.x_coord = properties.x_coord;
            _Start.y_coord = properties.y_coord;
          } else {
            _Start.floor = PoiLayer.floor.toLowerCase();
            _Start.x_coord = PoiLayer.x;
            _Start.y_coord = PoiLayer.y;
          }
        }
        var marker = Rtmap.Scene.SelectMarker;
        marker ? Rtmap.Scene.removeLayer(marker, true) : "";
        Rtmap.Scene.SelectMarker = null;
        _addStartMarker(startPointType);
        if (_Start.Poi == _End.Poi) {
          _clearEndPoi();
        }
        //_requestTrackFromNewServer();
      },
      setStartPoiXY: function (floor, x, y, callback) {
        _Start.floor = floor.toLowerCase();
        _Start.x_coord = x;
        _Start.y_coord = y;
        _Start.Poi = {};
        _Start.Poi.floor = floor.toLowerCase();
        _Start.Poi.x = x;
        _Start.Poi.y = y;
        _addStartMarker();
      },
      clearStartPoi: _clearStartPoi,
      clearEndPoi: _clearEndPoi,
      getTrackStatus: function () {
        return haveTrack;
      },
      setRoutePoints: function (ary) {
        routePoint = ary;
      },
      setEndPoi: function (PoiLayer, endPointType) {
        if (!PoiLayer && Rtmap.Search.FocusResult) { //
          _End.floor = Rtmap.Search.FocusResult.floor.toLowerCase();
          _End.x_coord = Rtmap.Search.FocusResult.x;
          _End.y_coord = Rtmap.Search.FocusResult.y;
          _End.Poi = Rtmap.Search.FocusResult.y;
        } else {
          var properties = PoiLayer.feature ? PoiLayer.feature.properties : "";
          _End.Poi = PoiLayer;
          if (properties) {
            _End.floor = properties.floor ? properties.floor.toLowerCase() : Rtmap.Scene.getNowFloor().toLowerCase();
            _End.x_coord = properties.x_coord;
            _End.y_coord = properties.y_coord;
          } else {
            _End.floor = PoiLayer.floor.toLowerCase();
            _End.x_coord = PoiLayer.x;
            _End.y_coord = PoiLayer.y;
          }
        }
        var marker = Rtmap.Scene.SelectMarker;
        marker ? Rtmap.Scene.removeLayer(marker, true) : "";
        Rtmap.Scene.SelectMarker = null;
        _addEndMarker(PoiLayer, endPointType);
        if (_Start.Poi == _End.Poi) {
          _clearStartPoi();
        }
        if (!_Start.Poi && !endPointType) {
          if (!Page.wechat.getLocaler()) {
            //_triggerEvent("needStartPoi");
          } else {
            //若存在实时定位信息
            var local = Page.wechat.getLocaler();
            _Start.Poi = local;
            _Start.floor = local.floor.toLowerCase();
            _Start.x_coord = local.x;
            _Start.y_coord = local.y;
          }
        }
        //_requestTrackFromNewServer();
      },
      setEndPoiXY: function (floor, x, y, callback) {
        _End.floor = floor.toLowerCase();
        _End.x_coord = x;
        _End.y_coord = y;
        _End.Poi = {};
        _End.Poi.x = x;
        _End.Poi.y = y;
        _End.floor.y = floor.toLowerCase();
        _addEndMarker();
        if (!_Start.Poi) {
          if (!Page.wechat.getLocaler()) {
            //_triggerEvent("needStartPoi");
          } else {
            //若存在实时定位信息
            var local = Page.wechat.getLocaler();
            _Start.Poi = local;
            _Start.floor = local.floor.toLowerCase();
            _Start.x_coord = local.x;
            _Start.y_coord = local.y;
          }
        }
        _requestTrackFromNewServer(callback);
      },
      getRoutePoints: function () {
        return _routePoiArray;
      },
      getRequestData: function () {
        return _ajaxRequestResult;
      },
      resetTrackLine: _resetTrackLine,
      drawCTrackLine: _drawCTrackLine,
      getCTrackLine: _getCTrackLine,
      getExtMarker: function () {
        return _to_floor_marker;
      },
      getCurrentTrackLine: function () {
        return _trackLine;
      },
      getAllTrackLine: function () {
        //返回包含起点延长线与终点延长线的导航线;
        var latlngs = []
        if (_startLine && _startLine._map) {
          var startLineLatlngs = _startLine.getLatLngs();
          for (var i = 0; i < startLineLatlngs.length; i++) {
            latlngs.push(startLineLatlngs[i]);
          }
        }
        if (_trackLine) {
          var trackLineLatlngs = _trackLine.getLatLngs();
          for (var i = 0; i < trackLineLatlngs.length; i++) {
            latlngs.push(trackLineLatlngs[i]);
          }
        }
        if (_endLine && _endLine._map) {
          var _endLineLatlngs = _trackLine.getLatLngs();
          for (var i = 0; i < _endLineLatlngs.length; i++) {
            latlngs.push(_endLineLatlngs[i]);
          }
        }
        var allTrackLine = L.polyline(latlngs, {
          color: 'red'
        });
        return allTrackLine;
      },
      setLocationTargetLine: function (line) {
        _locationTargetLine = line;
      },
      clearLocationTargetLine: function () {
        if (_locationTargetLine && _locationTargetLine._map) {
          _page.Scene.removeLayer(_locationTargetLine);
        }
        _locationTargetLine = null;
      },
      requestTrackFromServer: _requestTrackFromNewServer,
      clearCTrackLine: _clearCTrackLine,
      clearPath: function () {
        _clearAllLayer();
        _PoiList = {};
        haveTrack = false;
        _triggerEvent("clearPath");
      },
      clearAll: function () {
        _clearStartPoi();
        _clearEndPoi();
        this.clearPath();
      }
    }
  })();

  _page.Search = (function () {
    var searchPoint = {};
    var Events = {}

    function _triggerEvent(action, ary) {
      if (Events[action]) {
        for (var i = 0; i < Events[action].length; i++) {
          Events[action][i].apply(this, ary);
        }
      }
    }

    function _searchFromNewServer(jsonData, callback) {
      var requestData = {};
      requestData.key = Rtmap.Config.getOption().Key;
      var token = _page.Config.getOption().Token;
      token ? requestData.access_token = token : "";
      requestData.buildid = Rtmap.Config.getOption().buildId;
      requestData.keywords = jsonData.keyword;
      requestData.floor = Rtmap.Scene.getNowFloor().toUpperCase();
      requestData.pagesize = "30";
      requestData.pageindex = jsonData.searchPageIndex;
      if (searchPoint.x && searchPoint.y) {
        var point = searchPoint;
      } else {
        var point = Rtmap.Scene.getCenter();
      }
      requestData.refer_point = {
        x: point.x.toString(),
        y: point.y.toString()
      }
      var requestTime = new Date().getTime();
      _triggerEvent("beforeSearch", [requestTime]);
      $.ajax({
        type: "POST",
        url: "https://locateapi.rtmap.com/rtmap_lbs_api/v1/rtmap/search_keywords",
        //url:"http://lbsapitest2.rtmap.com:8080/rtmap_lbs_api/v1/rtmap/search_keywords",
        data: JSON.stringify(requestData),
      }).done(function (data) {
        if (data.result.error_code == "0") {
          var finalData = filterData(data.poilist || []);
          callback ? callback(finalData, data, jsonData) : ""; //anJ 多传参数jsonData
        } else {
          alert(data.result.error_msg);
        }
        _triggerEvent("afterSearch", [data, requestTime]);
      }).complete(function (data) {
        try {
          var response = JSON.parse(data.responseText);
          response.searchType = jsonData.searchType;
        } catch (e) {
          console.log(e);
        }
      });
    }

    function filterData(ary) {
      var finalData = {};
      var length = ary.length;
      for (var i = 0; i < length; i++) {
        var temp = ary[i];
        var floor = temp.floor.toLocaleLowerCase();
        if (!finalData[floor]) {
          finalData[floor] = [];
        }
        finalData[floor].push(temp);
      }
      return finalData;
    }

    function _searchTwoClass(twoClassName, callback) {
      var transData = {};
      transData.buildid = Rtmap.Config.getOption().buildId;
      transData.key = Rtmap.Config.getOption().Key;
      transData.pagesize = "999";
      transData.pageindex = "1";
      transData.floor = Rtmap.Scene.getNowFloor().toUpperCase();
      transData.classid = twoClassName;
      var centerPoint = Rtmap.Scene.getCenter();;
      transData.refer_point = {
        x: centerPoint.x,
        y: centerPoint.y
      }
      //分类搜索埋点
      if (window.buriedpoint) {
        window.buriedpoint.search_tag(twoClassName);
      }
      $.ajax({
        url: "https://locateapi.rtmap.com/rtmap_lbs_api/v1/search_classification",
        type: "post",
        dataType: "json",
        data: JSON.stringify(transData),
        success: function (data) {
          if (data.result.error_code == "0") {
            var finalData = filterData(data.poilist || []);
            //
            if (finalData[Rtmap.Scene.getNowFloor().toLowerCase()] && finalData[Rtmap.Scene.getNowFloor().toLowerCase()].length == 30) {
              _searchTwoClassNextPage(twoClassName, 2, finalData, callback);
            } else {
              callback ? callback(finalData, data) : "";
            }
          } else {
            alert(data.result.error_msg);
          }
        }
      })
    }

    //后台接口只返回了30条记录当前楼层数据
    function _searchTwoClassNextPage(twoClassName, pageIndex, datalist, callback) {
      var transData = {};
      transData.buildid = Rtmap.Config.getOption().buildId;
      transData.key = Rtmap.Config.getOption().Key;
      transData.pagesize = "999";
      transData.pageindex = pageIndex;
      transData.floor = Rtmap.Scene.getNowFloor().toUpperCase();
      transData.classid = twoClassName;
      var centerPoint = Rtmap.Scene.getMap().getBounds().getCenter();
      transData.refer_point = {
        x: centerPoint.lat.toString(),
        y: centerPoint.lng.toString()
      }
      $.ajax({
        url: "https://locateapi.rtmap.com/rtmap_lbs_api/v1/search_classification",
        type: "post",
        dataType: "json",
        data: JSON.stringify(transData),
        success: function (data) {
          if (data.result.error_code == "0") {
            var nextPageData = filterData(data.poilist || []);
            var currentFloorDataList = nextPageData[Rtmap.Scene.getNowFloor().toLowerCase()];
            if (currentFloorDataList) {
              for (var i = 0; i < nextPageData[Rtmap.Scene.getNowFloor().toLowerCase()].length; i++) {
                datalist[Rtmap.Scene.getNowFloor().toLowerCase()].push(currentFloorDataList[i]);
              }
            }
            callback ? callback(datalist, data) : "";
          } else {
            alert(data.result.error_msg);
          }
        }
      })
    }

    return {
      request: _searchFromNewServer,
      searchTwoClass: _searchTwoClass,
      on: function (action, func) {
        if (!Events[action]) {
          Events[action] = [];
        }
        Events[action].push(func);
      },
      setSearchPoint: function (x, y) {
        searchPoint.x = x;
        searchPoint.y = y;
      }
    }
  })();

  _page.Animate = (function () {
    function Animate(callback) {
      var stop = false;
      var clear = false;

      function loop() {
        var oldTime = new Date().getTime();
        L.Util.requestAnimFrame(function () {
          var time = new Date().getTime();
          callback(time - oldTime);
          if (!stop && !clear) {
            loop();
          }
        });
      };

      this.run = function () {
        stop = false;
        loop();
      };

      this.stop = function () {
        stop = true;
      };

      this.clear = function () {
        clear = true;
      };
    };
    return Animate;
  })();

  _page.Config = (function () {
    var _option = {
      buildId: null,
      service: "WFS",
      version: "1.0.0",
      request: "getFeature",
      maxFeatures: 5000,
      outputFormat: "text/javascript",
      defalutFloor: "f1",
      key: null,
      labelStyle: "standard", //standard(标准),circle-point(圆点),none(不显示标注)
      loadModel: "cdn", //数据加载方式cdn,server
      largeScene: false,
      scene: "", //机场-fly,商场-shop,停车-park
      poiDetialType: "0", //poi详情样式 0为标准 1为拼接类详情
    };
    //楼层信息()
    var _floorData = [];
    return {
      setup: function (option) {
        for (var i in option) {
          _option[i] = option[i];
        }
      },
      getOption: function () {
        return _option;
      },
      setFloorData: function (data) {
        _floorData = data;
      },
      getFloorData: function () {
        return _floorData;
      },
      getFloorAliasName: function (floor) {
        for (var i = 0; i < _floorData.length; i++) {
          if (_floorData[i].floor.toUpperCase() == floor.toUpperCase())
            if (_floorData[i].floor_alias)
              return _floorData[i].floor_alias.toUpperCase();
        }
        return floor.toUpperCase();
      },
      getFloorDesc: function (floor) {
        for (var i = 0; i < _floorData.length; i++) {
          if (_floorData[i].floor.toUpperCase() == floor.toUpperCase())
            if (_floorData[i].desc)
              return _floorData[i].desc;
        }
        return "";
      },
      getFloorSubject: function (floor) {
        for (var i = 0; i < _floorData.length; i++) {
          if (_floorData[i].floor.toUpperCase() == floor.toUpperCase())
            if (_floorData[i].floor_subject)
              return _floorData[i].floor_subject;
        }
        return "";
      },
      getBuildingType: function () {
        if (_option.buildId) {
          if (_option.buildId.substring(12, 13) == "1") {
            return "airport"
          } else {
            return "market";
          }
        }
      }
    }
  })();

  _page.Location = (function () {
    var _Events = {
      _call: function (key, ary) {
        var events = this[key];
        if (events) {
          for (var i = 0; i < events.length; i++) {
            events[i].apply(this, ary);
          };
        }
      },
    };

    var startHandler = null;
    var data = {
      "userID": "000000000001",
      "buildID": "860100010040500017",
      "floor": "F10",
      "errorInfo": "定位成功",
      "error": 0,
      "timestampPDR": 1448530660,
      "timestamp": 1448530660,
      "altitude": 0.0,
      "longitude": 0.0,
      "latitude": 0.0,
      "inOutDoorFlg": 0,
      "gpsAccuracy": 0.0,
      "floorID": 20100,
      "coordX": 8917,
      "coordY": -22051,
      "accuracy": 12,
      "x": 8.917,
      "y": -22.051
    }

    return {
      _setLocationData: function (jsonData) { // android SDK call this function
        _Events._call("haveLocation", [jsonData]);
      },
      _startHandler: function (msg) {
        startHandler ? startHandler(msg) : "";
      },
      _stopHandler: function (msg) {
        stopHandler ? stopHandler(msg) : "";
      },
      start: function (handler) {
        if (window.SDK_Location) {
          startHandler = handler;
          SDK_Location.start();
        } else {
          handler("This function need Rtmap Native APP SDK!");
        }
        //360调用
        if (window.WebViewJavascriptBridge) {
          startHandler = handler;
          JTN.getNative("start", {}, function (d) {});
        }
      },
      stop: function (handler) {
        if (window.SDK_Location) {
          stopHandler = handler;
          SDK_Location.stop();
        } else {
          handler("This function need Rtmap Native APP SDK!");
        }
        //360调用
        if (window.WebViewJavascriptBridge) {
          stopHandler = handler;
          JTN.getNative("stop", {}, function (d) {});
        }
      },
      on: function (action, func) {
        if (!_Events[action]) {
          _Events[action] = [];
        }
        _Events[action].push(func);
      }
    }
  })();

  //use to select or capture feature in map
  _page.FeatureSelect = (function () {
    var FeatureSelect = L.Class.extend(({
      includes: L.Mixin.Events,
      options: {
        icon: L.divIcon({
          iconSize: [64, 64],
          iconAnchor: [32, 32],
          className: 'leaflet-feature-selector' //'leaflet-feature-selector'
        }),
        selectSize: [64, 64],
        featureGroup: null
      },

      initialize: function (map, options) {
        L.setOptions(this, options);
        this._map = map;
        this.options.selectSize = L.point(this.options.selectSize);
      },

      enable: function () {
        if (this._enabled) {
          return;
        }

        L.Handler.prototype.enable.call(this);
        this._center = this._map.getCenter();
        this.layers = {};
        this._marker = L.marker(this._center).addTo(this._map);
        this._map.on('zoomend', this._zoomEnd, this);
        this._map.on('drag', this._drag, this);
        this._map.on('dragend', this._dragEnd, this);

        this.options.featureGroup.on('layeradd', function (evt) {
          this._checkIntersections();
        }, this);
        this.options.featureGroup.on('layerremove', function (evt) {
          this._handleNoIntersection(evt.layer);
          this._checkIntersections();
        }, this);
        return;
      },

      disable: function () {
        if (!this._enabled) {
          return;
        }
        L.Handler.prototype.disable.call(this);
        this._map.off('zoomend', this._zoomEnd, this);
        this._map.off('drag', this._drag, this);
        this._map.off('dragend', this._dragEnd, this);
        this._map.removeLayer(this._marker);
      },

      addHooks: function () {
        var map = this._map;

        if (map) {
          L.DomUtil.disableTextSelection();
          map.getContainer().focus();
        }

        this._map._container.style.cursor = 'default';
      },

      removeHooks: function () {
        if (this._map) {
          L.DomUtil.enableTextSelection();
        }
        this._map._container.style.cursor = '';
      },

      _handleIntersection: function (layer) {
        if (!this.layers[L.stamp(layer)]) {
          this.layers[L.stamp(layer)] = layer;
          this.justSelected.push(layer);
        }
      },

      _handleNoIntersection: function (layer) {
        if (this.layers[L.stamp(layer)]) {
          delete this.layers[L.stamp(layer)];
          this.justUnselected.push(layer);
        }
      },

      _checkIntersections: function (e) {
        if (!e) return;
        var centerPoint = this._map.options.crs.project(this._center), //this._map.project(e.latlng),
          selectBounds, selectBoundsCoords;
        this.justSelected = [];
        this.justUnselected = [];

        var crs = this._map.options.crs; //L.CRS.EPSG3395;

        var point1 = L.point(centerPoint.x + this.options.selectSize.x / 2, centerPoint.y - this.options.selectSize.y / 2);
        var point2 = L.point(centerPoint.x - this.options.selectSize.x / 2, centerPoint.y + this.options.selectSize.y / 2);
        var lf1 = crs.projection.unproject(point1);
        var lf2 = crs.projection.unproject(point2);
        selectBounds = L.latLngBounds(lf1, lf2);
        selectBoundsCoords = L.rectangle(selectBounds).toGeoJSON().geometry.coordinates[0];

        this.options.featureGroup.eachLayer(function (layer) {
          var coords = layer.feature.geometry.coordinates,
            len, i, intersects = false;

          switch (layer.feature.geometry.type) {
            case 'Point':
              coords = [coords];
              // fall through
            case 'MultiPoint':
              for (i = 0; i < coords.length; i++) {
                if (selectBounds.contains(L.latLng([coords[i][1], coords[i][0]]))) {
                  intersects = true;
                }
              }
              break;

            case 'LineString':
              coords = [coords];
              // fall through
            case 'MultiLineString':
              for (i = 0; i < coords.length; i++) {
                if (selectBounds.intersects(layer.getBounds()) && this._lineStringsIntersect(selectBoundsCoords, coords[i])) {
                  intersects = true;
                }
              }
              break;

            case 'Polygon':
              coords = [coords];
              // fall through
            case 'MultiPolygon':
              var centerPoint = this._map.options.crs.project(this._center);
              for (i = 0; i < coords.length; i++) {
                if (selectBounds.intersects(layer.getBounds()) && this._pointInPolygon(centerPoint.x, centerPoint.y, coords[i][0])) {
                  intersects = true;
                }
              }
              break;
          }
          //判断是否是按住Ctrl多选状态
          if (!intersects) {
            for (var i = 0; i < this.justSelected.length; i++) {
              if (this.justSelected[i] == layer) {
                intersects = true;
                break;
              }
            }
          }
          if (intersects) {
            this._handleIntersection(layer);
          } else {
            this._handleNoIntersection(layer);
          }

        }, this);

        this.fire('unselect', {
          layers: this.justUnselected,
          centerPoint: centerPoint
        });

        this.fire('select', {
          layers: this.justSelected,
          centerPoint: centerPoint
        });
      },

      // adapted from https://github.com/maxogden/geojson-js-utils/
      _lineStringsIntersect: function (c1, c2) {
        for (var i = 0; i <= c1.length - 2; ++i) {
          for (var j = 0; j <= c2.length - 2; ++j) {
            var a1 = {
                x: c1[i][1],
                y: c1[i][0]
              },
              a2 = {
                x: c1[i + 1][1],
                y: c1[i + 1][0]
              },
              b1 = {
                x: c2[j][1],
                y: c2[j][0]
              },
              b2 = {
                x: c2[j + 1][1],
                y: c2[j + 1][0]
              },

              ua_t = (b2.x - b1.x) * (a1.y - b1.y) - (b2.y - b1.y) * (a1.x - b1.x),
              ub_t = (a2.x - a1.x) * (a1.y - b1.y) - (a2.y - a1.y) * (a1.x - b1.x),
              u_b = (b2.y - b1.y) * (a2.x - a1.x) - (b2.x - b1.x) * (a2.y - a1.y);

            if (u_b !== 0) {
              var ua = ua_t / u_b,
                ub = ub_t / u_b;
              if (0 <= ua && ua <= 1 && 0 <= ub && ub <= 1) {
                return true;
              }
            }
          }
        }

        return false;
      },

      // Adapted from http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html#Listing the Vertices
      _pointInPolygon: function (x, y, polyCoords) {
        var inside = false,
          intersects, i, j;

        for (i = 0, j = polyCoords.length - 1; i < polyCoords.length; j = i++) {
          var xi = polyCoords[i][0],
            yi = polyCoords[i][1];
          var xj = polyCoords[j][0],
            yj = polyCoords[j][1];

          intersects = ((yi > y) !== (yj > y)) &&
            (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
          if (intersects) {
            inside = !inside;
          }
        }

        return inside;
      },

      _mouseMove: function (e) {
        this._marker.setLatLng(e.latlng);
        this._center = e.latlng;
      },

      _drag: function (e) {
        this._center = this._map.getCenter();
        this._marker.setLatLng(this._center);
      },

      _dragEnd: function (e) {
        this._center = this._map.getCenter();
        this._marker.setLatLng(this._center);
        this._checkIntersections(e);
      },

      _zoomEnd: function (e) {
        this._center = this._map.getCenter();
        this._marker.setLatLng(this._center);
        this._checkIntersections(e);
      }
    }));

    var _featureSelect;
    var _locationInfo;

    function _initCenterPoint() {
      var map = Rtmap.Scene.getMap();
      if (_featureSelect) {
        _featureSelect.off('select', _onSelect);
        _featureSelect.disable();
      }
      _featureSelect = new FeatureSelect(map, {
        featureGroup: Rtmap.Scene.getLayer(),
        selectSize: [16, 16]
      });

      _featureSelect.enable();
      _featureSelect.on('select', _onSelect);
    };

    function _onSelect(e) {
      var name = "";
      if (e.layers.length > 0) {
        name = e.layers[0].feature.properties.name_chinese;
      }
      _locationInfo = name + "_" + e.centerPoint.x.toString() + "_" + e.centerPoint.y.toString();

      //调用WEBVIEW
      if (window.jsObj) {
        window.jsObj.HtmlSendCenterPointLocationInfo(name, e.centerPoint.x.toString(), e.centerPoint.y.toString());
      }
      //IOS调用时
      if (window.HtmlSendCenterPointLocationInfoForIOS) {
        window.HtmlSendCenterPointLocationInfoForIOS(name, e.centerPoint.x.toString(), e.centerPoint.y.toString());
      }
    }

    return {
      initCenterPoint: _initCenterPoint,
      getCenterPointLoctionInfo: function () {
        return _locationInfo;
      }
    };
  })();

  //wechat locate
  _page.WechatLocate = (function () {
    //iphone DeviceMotionEvent and  DeviceOrientationEvent
    var iphoneMotionDataArr = new Array(50);
    var iphoneOrientationDataArr = new Array(50);
    //Android DeviceMotionEvent
    var androidMotionDataArr = new Array(50);
    var androidOrientationDataArr = new Array(50);

    if (navigator.userAgent.indexOf("iPhone") != -1) {
      if (window.DeviceMotionEvent && window.DeviceOrientationEvent) {
        window.addEventListener("devicemotion", function (eventData) {
          var iphoneData = {};
          var accelerationGravity = eventData.accelerationIncludingGravity;
          var acceleration = eventData.acceleration;
          iphoneData.GravityX = accelerationGravity.x;
          iphoneData.GravityY = accelerationGravity.y;
          iphoneData.GravityZ = accelerationGravity.z;
          iphoneMotionDataArr.timestamp = new Date().getTime();
          iphoneMotionDataArr.push(iphoneData);
          iphoneMotionDataArr.shift();
        }, false);
        window.addEventListener("deviceorientation", function (eventData) {
          var iphoneData = {};
          iphoneData.alpha = eventData.alpha;
          iphoneData.beta = eventData.beta;
          iphoneData.gamma = eventData.gamma;
          //这里的heading是指北针的角度
          iphoneData.heading = eventData.webkitCompassHeading;
          iphoneData.accuracy = eventData.webkitCompassAccuracy;
          iphoneOrientationDataArr.timestamp = new Date().getTime();
          iphoneOrientationDataArr.push(iphoneData);
          iphoneOrientationDataArr.shift();
        }, true);
      } else {
        alert("浏览器不支持");
      }
    } else if (navigator.userAgent.indexOf("Android") != -1) {
      if (window.DeviceMotionEvent && window.DeviceOrientationEvent) {
        window.addEventListener("devicemotion", function (eventData) {
          var androidData = {};
          var accelerationGravity = eventData.accelerationIncludingGravity;
          androidData.GravityX = accelerationGravity.x;
          androidData.GravityY = accelerationGravity.y;
          androidData.GravityZ = accelerationGravity.z;
          androidMotionDataArr.timestamp = new Date().getTime();
          androidMotionDataArr.push(androidData);
          androidMotionDataArr.shift();
        }, false);
        window.addEventListener("deviceorientationabsolute", function (eventData) {
          var androidData = {};
          androidData.alpha = 360 - eventData.alpha;
          androidData.beta = eventData.beta;
          androidData.gamma = eventData.gamma;
          //这里的heading是指北针的角度
          androidData.heading = eventData.webkitCompassHeading;
          androidData.accuracy = eventData.webkitCompassAccuracy;
          androidOrientationDataArr.timestamp = new Date().getTime();
          androidOrientationDataArr.push(androidData);
          androidOrientationDataArr.shift();
        }, true);
      } else {
        alert("浏览器不支持");
      }
    }

    function _prepare(data) {
      //dr信息
      var moveStatus = 0;
      var step = 0;
      var totalStep = 0;
      var lastTotalStep = 0;
      var angle = 0;
      if (data && (data.debug == "true")) {
        $("#show").css("display", "block");
      } else if (!data || (data.debug == "false")) {
        $("#show").css("display", "none");
      }

      window.wechat.onSign = function () {
        $("#show .timestamp").html("签名成功,时间:" + (new Date()).getTime().toString());
      }

      window.wechat.onScanStart = function (data) {
        $("#show .timestamp").html("开启扫描成功,时间:" + data.toString());
      };

      window.wechat.onScanSearch = function (data, callback) {
        //step = gSensor.getDiffStep();
        //lastTotalStep = lastTotalStep;
        //totalStep = gSensor.getStep();
        //step > 0 ? moveStatus = 1 : moveStatus = 0;
        var filterAndSort = {
          beacons: new Array()
        };
        //筛选设备然后做数据处理
        /*
        if (navigator.userAgent.indexOf("iPhone") != -1) {
            window.wechat.param.locate_data.pdr = {
                move_status: moveStatus,
                step: step
            };
            var standard = window.compassStandard(iphoneOrientationDataArr);
            window.wechat.param.locate_data.compass = {
                "standard": parseInt(standard),
                "average": (parseInt(iphoneOrientationDataArr[iphoneOrientationDataArr.length - 1].heading) + window.getBuildAngle()) % 360
            };
            angle = ((parseInt(iphoneOrientationDataArr[iphoneOrientationDataArr.length - 1].heading) + window.getBuildAngle()) % 360);
            $("#show .step").html("<p>" + "计步：" + (step + moveStatus).toString() + "动静：" + moveStatus.toString() + " 角度:" + ((parseInt(iphoneOrientationDataArr[iphoneOrientationDataArr.length - 1].heading) + window.getBuildAngle()) % 360).toString() + " 新计步:" + step + " 总步数:" + totalStep + "</p>");
        } else if (navigator.userAgent.indexOf("Android") != -1) {
            window.wechat.param.locate_data.pdr = {
                move_status: moveStatus,
                step: step
            };
            var heading = ((parseFloat(androidOrientationDataArr[androidOrientationDataArr.length - 1].alpha)) + window.getBuildAngle()) % 360;
            var standard = window.compassStandard(androidOrientationDataArr);
            window.wechat.param.locate_data.compass = {
                "standard": parseInt(standard),
                "average": parseInt(heading)
            };
            angle = heading;
            $("#show .step").html("<p>" + "计步：" + (step + moveStatus).toString() + "动静：" + moveStatus.toString() + " 角度:" + ((parseInt(heading) + window.getBuildAngle()) % 360).toString() + " 新计步:" + step + " 总步数:" + totalStep + "</p>");
        }
        */
        for (var i = 0; i < data.beacons.length; i++) {
          if (data.beacons[i].rssi != 0) {
            filterAndSort.beacons.push(data.beacons[i]);
          }
        }

        if (filterAndSort.beacons.length == 0) {
          return;
        } else {
          for (var i = 0; i < filterAndSort.beacons.length - 1; i++) {
            for (var j = 0; j < filterAndSort.beacons.length - 1; j++) {
              if (parseInt(filterAndSort.beacons[j].rssi) < parseInt(filterAndSort.beacons[j + 1].rssi)) {
                var tmp = filterAndSort.beacons[j];
                filterAndSort.beacons[j] = filterAndSort.beacons[j + 1];
                filterAndSort.beacons[j + 1] = tmp;
              }
            }
          }
          $("#show .wechat_text").html((new Date().toString()) + "  " + JSON.stringify(filterAndSort));
          window.wechat.param.timestamp = new Date().getTime();
          callback(filterAndSort);
        }
      };

      window.wechat.lastlbsinfo = null;

      //发送前处理
      window.wechat.beforePost = function () {
        //筛选设备然后做数据处理
        if (navigator.userAgent.indexOf("iPhone") != -1) {
          window.wechat.param.locate_data.pdr = {
            move_status: moveStatus,
            step: step
          };
          var standard = window.compassStandard(iphoneOrientationDataArr);
          window.wechat.param.locate_data.compass = {
            "standard": parseInt(standard),
            "average": (parseInt(iphoneOrientationDataArr[iphoneOrientationDataArr.length - 1].heading) + window.getBuildAngle()) % 360
          };
          angle = ((parseInt(iphoneOrientationDataArr[iphoneOrientationDataArr.length - 1].heading) + window.getBuildAngle()) % 360);
          //$("#show .step").html("<p>" + "计步：" + (step + moveStatus).toString() + "动静：" + moveStatus.toString() + " 角度:" + ((parseInt(iphoneOrientationDataArr[iphoneOrientationDataArr.length - 1].heading) + window.getBuildAngle()) % 360).toString() + " 新计步:" + step + " 总步数:" + totalStep + " 次数：" + window.wechat.sendCount.toString() + "</p>");
        } else if (navigator.userAgent.indexOf("Android") != -1) {
          window.wechat.param.locate_data.pdr = {
            move_status: moveStatus,
            step: step
          };
          var heading = ((parseFloat(androidOrientationDataArr[androidOrientationDataArr.length - 1].alpha)) + window.getBuildAngle()) % 360;
          var standard = window.compassStandard(androidOrientationDataArr);
          window.wechat.param.locate_data.compass = {
            "standard": parseInt(standard),
            "average": parseInt(heading)
          };
          angle = heading;
          //$("#show .step").html("<p>" + "计步：" + (step + moveStatus).toString() + "动静：" + moveStatus.toString() + " 角度:" + ((parseInt(heading)) % 360).toString() + " 新计步:" + step + " 总步数:" + totalStep + " 次数：" + window.wechat.sendCount.toString() + "</p>");
        }
      };

      window.wechat.onPost = function (data) {
        step = gSensor.getDiffStep();
        lastTotalStep = lastTotalStep;
        totalStep = gSensor.getStep();
        step > 0 ? moveStatus = 1 : moveStatus = 0;
        if (data.timestamp && parseInt(data.timestamp) < parseInt(window.timeTmp)) {
          return;
        }
        window.timeTmp = data.timestamp;
        $("#show .xy_text").html((new Date().toString()) + "  " + JSON.stringify(data));
        $("#show .result_timestamp").append("<p>" + window.timeTmp + "</p>");
        lbsinfo = window.wechat.lastlbsinfo;

        if ((moveStatus > 0 || !window.wechat.lastlbsinfo) && data.lbsinfo) { //动静判断或首次定位时
          Page.wechat.drawLocation(data, function () {});
          if (!window.wechat.lastlbsinfo && data.lbsinfo) {
            //首次定位埋点
            window.buriedpoint.open_location(data.lbsinfo.floor, data.lbsinfo.x, data.lbsinfo.y);
          }
        }
        if (!data.lbsinfo && moveStatus > 0 && lbsinfo) { //若定位不成功但有记步值,使用离线dr来纠正;
          var delt_x = step * 0.6 * Math.sin((angle * 1.0 / 180) * 3.14159);
          var delt_y = -step * 0.6 * Math.cos((angle * 1.0 / 180) * 3.14159);
          var x_new = parseFloat(lbsinfo.x) + parseFloat(delt_x);
          var y_new = parseFloat(lbsinfo.y) - parseFloat(delt_y);
          lbsinfo.x = x_new;
          lbsinfo.y = y_new;
          data.lbsinfo = lbsinfo;
          data.result.error_code = 0;
          Page.wechat.drawLocation(data, function () {});
        }

        if (data.lbsinfo) {
          window.wechat.lastlbsinfo = data.lbsinfo;
        }
        Rtmap.WifiLocation.stopWifiLocation(); //停止wifi定位
      };
      window.wechat.onScanStop = function (res) {
        //alert(JSON.stringify(res));
        $("#show .wechat_text").html("");
        $("#show .xy_text").html("");
      };
      window.wechat.onOverTime = function () {
        //alert("请检查蓝牙是否开启，或者所在区域扫描不到设备");
      };
      window.wechat.init();
    }

    return {
      prepare: _prepare,
      getCompassHeading: function () {
        var compassHeading = null;
        //指针方向
        if (navigator.userAgent.indexOf("iPhone") != -1) {
          iphoneOrientationDataArr[iphoneOrientationDataArr.length - 1] ? compassHeading = iphoneOrientationDataArr[iphoneOrientationDataArr.length - 1].heading : "";
        } else {
          androidOrientationDataArr[androidOrientationDataArr.length - 1] ? compassHeading = (360 - parseFloat(androidOrientationDataArr[androidOrientationDataArr.length - 1].alpha)) : "";
        }
        return compassHeading;
      }
    };
  })();

  //停车场状态
  _page.Parking = (function () {
    var _monitorTimer = null;
    var _parkingApiUrl = "";
    var _isParkingStatus = false;
    var parkPoiLayers = null; //停车位POI

    //获取停车场状态信息第三方URL地址
    function _getBuildParkingStatusUrl(callback) {
      var requestData = {};
      requestData.key = _page.Config.getOption().Key;
      var token = _page.Config.getOption().Token;
      token ? requestData.access_token = token : "";
      requestData.buildid = _page.Config.getOption().buildId;
      requestData.floor = Rtmap.Scene.getNowFloor();

      $.ajax({
        type: "POST",
        url: "https://locateapi.rtmap.com/rtmap_lbs_api/v1/rtmap/park_url",
        //url: "http://39.106.250.59:8082/rtmap_lbs_api/v1/rtmap/park_url",//test url
        data: JSON.stringify(requestData),
        dataType: "json",
      }).done(function (data) {
        if (data.result.error_code == "0") {
          _parkingApiUrl = data.url;
        } else {
          _stopMonitor();
        }
        callback ? callback(data) : "";
      })
    };

    //根据第三方URL地址获取状态数据
    function _getBuildParkingStatusData(url, callback) {
      $.ajax({
        type: "GET",
        url: url,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "parseResponse",
      }).done(function (data) {
        if (data.msg == "操作成功") {

        } else {

        }
        callback ? callback(data) : "";
      })
    };

    function _updateParkingStatus() {
      _getBuildParkingStatusUrl(function (data) {
        var url = data.url;
        _getBuildParkingStatusData(url, function (parkstatus_data) {
          parkPoiLayers = Rtmap.Scene.getTypeDataLayer();
          for (var i = 0; i < parkstatus_data.data.length; i++) {
            var status_data = parkstatus_data.data[i];

            for (var j in parkPoiLayers) {
              var childLayers = parkPoiLayers[j].getLayers();
              for (var k = 0; k < childLayers.length; k++) {
                if (childLayers[k].feature.properties.name_chinese == status_data.parkspace) {
                  if (status_data.status == 0) { //0为空位
                    childLayers[k].setStyle(Rtmap.Style.getParkingStatusStyle().free);
                    childLayers[k].ParkingStatus = "free";
                  } else if (status_data.status == 1) { //1为占用
                    childLayers[k].setStyle(Rtmap.Style.getParkingStatusStyle().busy);
                    childLayers[k].ParkingStatus = "busy";
                  } else { //2为预留
                    childLayers[k].setStyle(Rtmap.Style.getParkingStatusStyle().plan);
                    childLayers[k].ParkingStatus = "plan";
                  }
                }
              }
            }
          }
        });
      });
    };

    function _startMonitor() {
      setTimeout(function () {
        _stopMonitor();
        _updateParkingStatus();
        _isParkingStatus = true;
        _monitorTimer = setInterval(function () {
          _updateParkingStatus();
        }, 60000);
      }, 1000);
    };

    function _stopMonitor() {
      _monitorTimer ? window.clearInterval(_monitorTimer) : "";
      _isParkingStatus = false;
    };

    function _getParkingStatus() {
      return _isParkingStatus;
    };

    return {
      updateParkingStatus: _updateParkingStatus,
      startMonitor: _startMonitor,
      stopMonitor: _stopMonitor,
      getParkingStatus: _getParkingStatus
    }
  })();

  //wifi定位相关
  _page.WifiLocation = (function () {
    var _monitorTimer = null;
    var _macUrl = "";
    var _locationUrl = "";
    var _mac = "";
    var _bIsWifiLocation = false;
    var _iTryCount = 5;
    var _iTryIndex = 0;

    //获取MacURL地址
    function _getMacInfoUrl(callback) {
      var requestData = {};
      requestData.key = _page.Config.getOption().Key;
      requestData.build_id = _page.Config.getOption().buildId;
      requestData.action = "querymac";
      $.ajax({
        type: "POST",
        //url: "http://lbsapitest2.rtmap.com:8080/rtmap_lbs_api/v1/rtmap/netlocate_url",//test url
        url: "https://locateapi.rtmap.com/rtmap_lbs_api/v1/rtmap/netlocate_url",
        data: JSON.stringify(requestData),
        dataType: "json",
      }).done(function (data) {
        if (data.result.error_code == "0") {
          _parkingApiUrl = data.url;
        }
        callback ? callback(data) : "";
      })
    };

    //获取MacURL地址
    function _getLocateUrl(callback) {
      var requestData = {};
      requestData.key = _page.Config.getOption().Key;;
      requestData.build_id = _page.Config.getOption().buildId;
      requestData.action = "locate";
      $.ajax({
        type: "POST",
        //url: "http://lbsapitest2.rtmap.com:8080/rtmap_lbs_api/v1/rtmap/netlocate_url",//test url
        url: "https://locateapi.rtmap.com/rtmap_lbs_api/v1/rtmap/netlocate_url",
        data: JSON.stringify(requestData),
        dataType: "json",
      }).done(function (data) {
        if (data.result.error_code == "0") {

        }
        callback ? callback(data) : "";
      })
    };

    //根据第三方URL地址获取Mac
    function _getMac(url, callback) {
      var key = _page.Config.getOption().Key;
      var open_id = _page.Config.getOption().openId;
      var build_id = _page.Config.getOption().buildId;
      $.ajax({
        type: "GET",
        url: url + "?key=" + key + "&open_id=" + open_id + "&build_id=" + build_id,
        dataType: "json"
      }).done(function (data) {
        if (data.msg == "操作成功") {

        } else {

        }
        callback ? callback(data) : "";
        $("#show .xy_text").html(JSON.stringify(data));
      })
    };

    //根据第三方URL地址获取定位信息
    function _getLocationInfo(url, mac, callback) {
      var key = _page.Config.getOption().Key;
      var open_id = _page.Config.getOption().openId;
      var build_id = _page.Config.getOption().buildId;
      $.ajax({
        type: "GET",
        url: url + "?key=" + key + "&open_id=" + open_id + "&build_id=" + build_id + "&mac=" + mac,
        dataType: "json"
      }).done(function (data) {
        if (data.result.error_msg == "success") {
          var lbs = {};
          lbs.floor = data.loc.flr;
          lbs.x = data.loc.x / 1000;
          lbs.y = -data.loc.y / 1000;
          lbs.buildid = build_id;
          data.lbsinfo = lbs;
          callback ? callback(data) : "";
        }
        $("#show .xy_text").html(JSON.stringify(data));
      })
    };

    function _init() {
      _getMacInfoUrl(function (e) {
        _macUrl = e.url;
        if (_macUrl) {
          _getMac(_macUrl, function (data) {
            _mac = data.mac;
          })
        }
      });
      //获取定位地址
      _getLocateUrl(function (e) {
        _locationUrl = e.url
      })
    }

    function _startWifiLocation() {
      _stopWifiLocation();
      _init();
      _bIsWifiLocation = true;
      setTimeout(function () {
        _monitorTimer = setInterval(function () {
          $("#show .wechat_text").html("mac:" + _mac + "   locationUrl:" + _locationUrl);
          if (_mac != "" && _locationUrl != "") {
            _getLocationInfo(_locationUrl, _mac, function (data) {
              Page.wechat.drawLocation(data, function () {
                //绘图完成
              });
            })
          } else {
            _iTryIndex++;
            if (_iTryIndex >= _iTryCount) {
              _stopWifiLocation();
            }
          }
        }, 5000);
      }, 1000);
    }

    function _stopWifiLocation() {
      _monitorTimer ? window.clearInterval(_monitorTimer) : "";
      _iTryIndex = 0;
      _bIsWifiLocation = false;
    }

    function _isInWifiLocationStatus() {
      return _bIsWifiLocation;
    };

    return {
      startWifiLocation: _startWifiLocation,
      stopWifiLocation: _stopWifiLocation,
      isInWifiLocationStatus: _isInWifiLocationStatus
    }
  })();

  window.Rtmap = _page;
  return _page;
});


function rgbToHex() {
  var d = "#";
  for (var i = 0; i < arguments.length; i++) {
    d += arguments[i].toString(16);
  };
  console.log(d);
};

(function () {
  L.Curve = L.Path.extend({
    options: {},

    initialize: function (path, options) {
      L.setOptions(this, options);
      this._initialUpdate = true;
      this._setPath(path);
    },

    isCurve: true,

    getLatLngs: function () {
      return this.latlngs;
    },
    getSubCurveLatLngs: function (startIndex, endIndex) {

    },
    setLatLngs: function (latlngs) {
      this.latlngs = latlngs;
    },
    getPath: function () {
      return this._coords;
    },

    setPath: function (path) {
      this._setPath(path);
      return this.redraw();
    },

    getBounds: function () {
      return this._bounds;
    },

    _setPath: function (path) {
      this._coords = path;
      this._bounds = this._computeBounds();
    },

    _computeBounds: function () {
      var bound = new L.LatLngBounds();
      var lastPoint;
      var lastCommand;
      var coord;
      for (var i = 0; i < this._coords.length; i++) {
        coord = this._coords[i];
        if (typeof coord == 'string' || coord instanceof String) {
          lastCommand = coord;
        } else if (lastCommand == 'H') {
          bound.extend([lastPoint.lat, coord[0]]);
          lastPoint = new L.latLng(lastPoint.lat, coord[0]);
        } else if (lastCommand == 'V') {
          bound.extend([coord[0], lastPoint.lng]);
          lastPoint = new L.latLng(coord[0], lastPoint.lng);
        } else if (lastCommand == 'C') {
          var controlPoint1 = new L.latLng(coord[0], coord[1]);
          coord = this._coords[++i];
          var controlPoint2 = new L.latLng(coord[0], coord[1]);
          coord = this._coords[++i];
          var endPoint = new L.latLng(coord[0], coord[1]);

          bound.extend(controlPoint1);
          bound.extend(controlPoint2);
          bound.extend(endPoint);

          endPoint.controlPoint1 = controlPoint1;
          endPoint.controlPoint2 = controlPoint2;
          lastPoint = endPoint;
        } else if (lastCommand == 'S') {
          var controlPoint2 = new L.latLng(coord[0], coord[1]);
          coord = this._coords[++i];
          var endPoint = new L.latLng(coord[0], coord[1]);

          var controlPoint1 = lastPoint;
          if (lastPoint.controlPoint2) {
            var diffLat = lastPoint.lat - lastPoint.controlPoint2.lat;
            var diffLng = lastPoint.lng - lastPoint.controlPoint2.lng;
            controlPoint1 = new L.latLng(lastPoint.lat + diffLat, lastPoint.lng + diffLng);
          }

          bound.extend(controlPoint1);
          bound.extend(controlPoint2);
          bound.extend(endPoint);

          endPoint.controlPoint1 = controlPoint1;
          endPoint.controlPoint2 = controlPoint2;
          lastPoint = endPoint;
        } else if (lastCommand == 'Q') {
          var controlPoint = new L.latLng(coord[0], coord[1]);
          coord = this._coords[++i];
          var endPoint = new L.latLng(coord[0], coord[1]);

          bound.extend(controlPoint);
          bound.extend(endPoint);

          endPoint.controlPoint = controlPoint;
          lastPoint = endPoint;
        } else if (lastCommand == 'T') {
          var endPoint = new L.latLng(coord[0], coord[1]);

          var controlPoint = lastPoint;
          if (lastPoint.controlPoint) {
            var diffLat = lastPoint.lat - lastPoint.controlPoint.lat;
            var diffLng = lastPoint.lng - lastPoint.controlPoint.lng;
            controlPoint = new L.latLng(lastPoint.lat + diffLat, lastPoint.lng + diffLng);
          }

          bound.extend(controlPoint);
          bound.extend(endPoint);

          endPoint.controlPoint = controlPoint;
          lastPoint = endPoint;
        } else {
          bound.extend(coord);
          lastPoint = new L.latLng(coord[0], coord[1]);
        }
      }
      return bound;
    },

    //TODO: use a centroid algorithm instead
    getCenter: function () {
      return this._bounds.getCenter();
    },

    _update: function () {
      if (!this._map) {
        return;
      }

      this._updatePath();
    },

    _updatePath: function () {
      this._renderer._updatecurve(this);
    },

    _project: function () {
      var coord, lastCoord, curCommand, curPoint;

      this._points = [];

      for (var i = 0; i < this._coords.length; i++) {
        coord = this._coords[i];
        if (typeof coord == 'string' || coord instanceof String) {
          this._points.push(coord);
          curCommand = coord;
        } else {
          switch (coord.length) {
            case 2:
              curPoint = this._map.latLngToLayerPoint(coord);
              lastCoord = coord;
              break;
            case 1:
              if (curCommand == 'H') {
                curPoint = this._map.latLngToLayerPoint([lastCoord[0], coord[0]]);
                lastCoord = [lastCoord[0], coord[0]];
              } else {
                curPoint = this._map.latLngToLayerPoint([coord[0], lastCoord[1]]);
                lastCoord = [coord[0], lastCoord[1]];
              }
              break;
          }
          this._points.push(curPoint);
        }
      }
    },

  });

  L.curve = function (path, options) {
    return new L.Curve(path, options);
  };

  L.SVG.include({
    _updatecurve: function (layer) {
      this._setPath(layer, this._curvePointsToPath(layer._points));

      if (layer.options.animate) {
        var path = layer._path;
        var length = path.getTotalLength();

        if (!layer.options.dashArray) {
          path.style.strokeDasharray = length + ' ' + length;
        }

        if (layer._initialUpdate) {
          path.animate([{
              strokeDashoffset: length
            },
            {
              strokeDashoffset: 0
            }
          ], layer.options.animate);
          layer._initialUpdate = false;
        }
      }
    },

    _curvePointsToPath: function (points) {
      var point, curCommand, str = '';
      for (var i = 0; i < points.length; i++) {
        point = points[i];
        if (typeof point == 'string' || point instanceof String) {
          curCommand = point;
          str += curCommand;
        } else {
          switch (curCommand) {
            case 'H':
              str += point.x + ' ';
              break;
            case 'V':
              str += point.y + ' ';
              break;
            default:
              str += point.x + ',' + point.y + ' ';
              break;
          }
        }
      }
      return str || 'M0 0';
    }
  });

  L.curveUtil = (function () {

    function _computeAngle(a1, b1, a2, b2, a3, b3) {
      var x1 = a2 - a1;
      var y1 = b2 - b1;
      var x2 = a3 - a1;
      var y2 = b3 - b1;
      var v1 = (x1 * x2) + (y1 * y2);
      var a = (x2) * (y1) - (y2) * (x1);
      var ma_val = Math.sqrt(x1 * x1 + y1 * y1);
      var mb_val = Math.sqrt(x2 * x2 + y2 * y2);
      var cosM = v1 / (ma_val * mb_val);
      var angle = Math.acos(cosM);
      if (a < 0) {
        angle = Math.PI * 2 - angle;
      }
      return angle;
    }

    /*
     * 记录三点是否共线  计算以点1为顶点的夹角
     */
    function _isoneline(x1, y1, x2, y2, x3, y3) {
      var angle = Math.abs(_computeAngle(x1, y1, x2, y2, x3, y3)) * 180 / Math.PI;
      var result = 0;
      if (Math.abs(angle) > 0.01) {
        result = 1;
      }
      return result;
    }

    function _distance(a, b) {
      return Math.sqrt((b.x - a.x) * (b.x - a.x) + (b.y - a.y) * (b.y - a.y));
    };

    function _interpolateOnPointSegment(pA, pB, ratio) {
      return L.point(
        (pA.x * (1 - ratio)) + (ratio * pB.x),
        (pA.y * (1 - ratio)) + (ratio * pB.y)
      );
    };

    function _interpolateOnLine(map, latLngs, ratio) {
      latLngs = (latLngs instanceof L.Polyline) ? latLngs.getLatLngs() : latLngs;
      var n = latLngs.length;
      if (n < 2) {
        return null;
      }

      // ensure the ratio is between 0 and 1;
      ratio = Math.max(Math.min(ratio, 1), 0);

      if (ratio === 0) {
        return {
          latLng: latLngs[0] instanceof L.LatLng ? latLngs[0] : L.latLng(latLngs[0]),
          predecessor: -1
        };
      }
      if (ratio == 1) {
        return {
          latLng: latLngs[latLngs.length - 1] instanceof L.LatLng ? latLngs[latLngs.length - 1] : L.latLng(latLngs[latLngs.length - 1]),
          predecessor: latLngs.length - 2
        };
      }

      // project the LatLngs as Points,
      // and compute total planar length of the line at max precision
      var maxzoom = map.getMaxZoom();
      if (maxzoom === Infinity)
        maxzoom = map.getZoom();
      var pts = [];
      var lineLength = 0;
      for (var i = 0; i < n; i++) {
        pts[i] = map.project(latLngs[i], maxzoom);
        if (i > 0)
          lineLength += pts[i - 1].distanceTo(pts[i]);
      }

      var ratioDist = lineLength * ratio;
      var a = pts[0],
        b = pts[1],
        distA = 0,
        distB = a.distanceTo(b);
      // follow the line segments [ab], adding lengths,
      // until we find the segment where the points should lie on
      var index = 1;
      for (; index < n && distB < ratioDist; index++) {
        a = b;
        distA = distB;
        b = pts[index];
        distB += a.distanceTo(b);
      }
      // compute the ratio relative to the segment [ab]
      var segmentRatio = ((distB - distA) !== 0) ? ((ratioDist - distA) / (distB - distA)) : 0;
      var interpolatedPoint = _interpolateOnPointSegment(a, b, segmentRatio);
      return {
        latLng: map.unproject(interpolatedPoint, maxzoom),
        predecessor: index - 2
      };
    }

    function _createCurveFromLatlngs(map, latlngs, style, ratio) {
      //缩短首尾端
      if (ratio) {
        if (latlngs.length >= 2) {
          var interpolateStartLatlng = _interpolateOnLine(map, [latlngs[1], latlngs[0]], ratio);
          var interpolateEndLatlng = _interpolateOnLine(map, [latlngs[latlngs.length - 2], latlngs[latlngs.length - 1]], ratio);
          latlngs[0] = interpolateStartLatlng.latLng;
          latlngs[latlngs.length - 1] = interpolateEndLatlng.latLng;
        }
      }
      var path = [];
      for (var i = 0; i < latlngs.length; i++) {
        if (i == 0) {
          path.push('M');
          path.push([latlngs[i].lat, latlngs[i].lng]);
        } else {
          if (i > 0 && i < latlngs.length - 1) {
            var result = _isoneline(latlngs[i - 1].lat, latlngs[i - 1].lng,
              latlngs[i].lat, latlngs[i].lng,
              latlngs[i + 1].lat, latlngs[i + 1].lng);
            if (result != 0) {
              var length1 = map.distance(latlngs[i - 1], latlngs[i]);
              var length2 = map.distance(latlngs[i], latlngs[i + 1]);

              var interpolateLatlng1 = _interpolateOnLine(map, [latlngs[i - 1], latlngs[i]], 0.9);
              var interpolateLatlng2 = _interpolateOnLine(map, [latlngs[i + 1], latlngs[i]], 1 - (length1 / length2) * 0.1);

              path.push([interpolateLatlng1.latLng.lat, interpolateLatlng1.latLng.lng]);
              path.push('Q');
              path.push([latlngs[i].lat, latlngs[i].lng]);
              path.push([interpolateLatlng2.latLng.lat, interpolateLatlng2.latLng.lng]);
              path.push('L');
              path.push([interpolateLatlng2.latLng.lat, interpolateLatlng2.latLng.lng]);
            } else {
              path.push('L');
              path.push([latlngs[i].lat, latlngs[i].lng]);
            }
          } else {
            path.push('L');
            path.push([latlngs[i].lat, latlngs[i].lng]);
          }
        }
      }
      var curve = L.curve(path, style);
      curve.setLatLngs(latlngs);
      return curve;
    }

    return {
      distance: _distance,
      isoneline: _isoneline,
      interpolateOnLine: _interpolateOnLine,
      createCurveFromLatlngs: _createCurveFromLatlngs
    };

  })();
})();

/*polylineextend 设置导航线符号*/
(function () {
  var __onAdd = L.Polyline.prototype.onAdd,
    __onRemove = L.Polyline.prototype.onRemove,
    __updatePath = L.Polyline.prototype._updatePath,
    __bringToFront = L.Polyline.prototype.bringToFront;

  var PolylineTextPath = {

    onAdd: function (map) {
      __onAdd.call(this, map);
      this._textRedraw();
    },

    onRemove: function (map) {
      map = map || this._map;
      if (map && this._textNode) {
        var svg = this._map._pathRoot;
        if (!svg) {
          //兼容leaflet1.0rc
          svg = this._renderer._container;
        }
        svg.removeChild(this._textNode);
        //map._pathRoot.removeChild(this._textNode);
      }
      __onRemove.call(this, map);
    },

    bringToFront: function () {
      __bringToFront.call(this);
      this._textRedraw();
    },

    _updatePath: function () {
      if (this.isCurve) {
        this._renderer._updatecurve(this);
      } else {
        __updatePath.call(this);
      }
      this._textRedraw();
    },

    _textRedraw: function () {
      var text = this._text,
        options = this._textOptions;
      if (text) {
        this.setText(null).setText(text, options);
      }
    },

    _createElement: function (name) {
      return document.createElementNS('http://www.w3.org/2000/svg', name);
    },

    setText: function (text, options) {
      this._text = text;
      this._textOptions = options;

      /* If not in SVG mode or Polyline not added to map yet return */
      /* setText will be called by onAdd, using value stored in this._text */
      if (!L.Browser.svg || typeof this._map === 'undefined') {
        return this;
      }

      var defaults = {
        repeat: false,
        fillColor: 'black',
        attributes: {},
        below: false,
      };
      options = L.Util.extend(defaults, options);

      /* If empty text, hide */
      if (!text) {
        if (this._textNode && this._textNode.parentNode) {
          var svg = this._map._pathRoot;
          if (!svg) {
            //兼容leaflet1.0rc
            svg = this._renderer._container;
          }
          svg.removeChild(this._textNode);
          //this._map._pathRoot.removeChild(this._textNode);
          /* delete the node, so it will not be removed a 2nd time if the layer is later removed from the map */
          delete this._textNode;
        }
        return this;
      }

      text = text.replace(/ /g, '\u00A0'); // Non breakable spaces
      var id = 'pathdef-' + L.Util.stamp(this);
      var svg = this._map._pathRoot;
      if (!svg) {
        //兼容leaflet1.0rc
        svg = this._renderer._container;
      }
      this._path.setAttribute('id', id);

      if (options.repeat) {
        /* Compute single pattern length */
        var pattern = this._createElement('text');
        for (var attr in options.attributes)
          pattern.setAttribute(attr, options.attributes[attr]);
        pattern.appendChild(document.createTextNode(text));
        svg.appendChild(pattern);
        var alength = pattern.getComputedTextLength();
        svg.removeChild(pattern);

        /* Create string as long as path */
        text = new Array(Math.ceil(this._path.getTotalLength() / alength)).join(text);
      }

      /* Put it along the path using textPath */
      var textNode = this._createElement('text'),
        textPath = this._createElement('textPath');

      var dy = options.offset || this._path.getAttribute('stroke-width');

      textPath.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", '#' + id);
      textNode.setAttribute('dy', dy);
      for (var attr in options.attributes)
        textNode.setAttribute(attr, options.attributes[attr]);
      textPath.appendChild(document.createTextNode(text));
      textNode.appendChild(textPath);
      this._textNode = textNode;

      if (options.below) {
        svg.insertBefore(textNode, svg.firstChild);
      } else {
        svg.appendChild(textNode);
      }

      /* Center text according to the path's bounding box */
      if (options.center) {
        var textLength = textNode.getComputedTextLength();
        var pathLength = this._path.getTotalLength();
        /* Set the position for the left side of the textNode */
        textNode.setAttribute('dx', ((pathLength / 2) - (textLength / 2)));
      }

      /* Initialize mouse events for the additional nodes */
      if (this.options.clickable) {
        if (L.Browser.svg || !L.Browser.vml) {
          textPath.setAttribute('class', 'leaflet-clickable');
        }

        L.DomEvent.on(textNode, 'click', this._onMouseClick, this);

        var events = ['dblclick', 'mousedown', 'mouseover',
          'mouseout', 'mousemove', 'contextmenu'
        ];
        for (var i = 0; i < events.length; i++) {
          L.DomEvent.on(textNode, events[i], this._fireMouseEvent, this);
        }
      }
      //设置为不响应鼠标操作
      textNode.style.pointerEvents = "none";
      return this;
    }
  };

  L.Polyline.include(PolylineTextPath);
  L.Curve.include(PolylineTextPath);

  L.LayerGroup.include({
    setText: function (text, options) {
      for (var layer in this._layers) {
        if (typeof this._layers[layer].setText === 'function') {
          this._layers[layer].setText(text, options);
        }
      }
      return this;
    }
  });

})();

//埋点
(function () {
  try {
    var userDevice = navigator.userAgent.indexOf("iPhone") != -1 ? "iPhone" : "Android";
    var version = "3.0";
    window.accessLogAppender = function (target, key) {
      var timeStamp = new Date().getTime();
      $.post("https://locateapi.rtmap.com/rtmap_lbs_api/v1/rtmap/opt_log", JSON.stringify({
        key: key,
        timestamp: timeStamp,
        source: "机场",
        device_type: userDevice,
        version: version,
        opt: target
      }));
    };
  } catch (err) {
    console.log(err);
  }
})();

//埋点2.0版本
(function () {
  //埋点时间
  function getTimeString() {
    var mydate = new Date();
    var year = mydate.getFullYear();
    var mouth = mydate.getMonth() + 1;
    var day = mydate.getDate();
    var hour = mydate.getHours();
    var minute = mydate.getMinutes();
    var second = mydate.getSeconds();
    var time = year + "-" + mouth + "-" + day + " " + hour + ":" + minute + ":" + second;
    return time;
  }
  //获取用户ID
  function getUserId() {
    var userid = Page.URL.getParameter("openid");
    if (!userid) {
      userid = "";
    }
    return userid;
  }

  //发送请求
  function sendBuriedPoint(data) {
    //埋点详细信息
    $.ajax({
      url: "https://locateapi.rtmap.com/rtmap_lbs_api/v1/rtmap/burying_Point",
      type: "POST",
      data: JSON.stringify(data),
      dataType: "json"
    })
  }

  window.buriedpoint = {
    //打开地图
    open_map: function () {
      var postdata = {
        "userid": getUserId(),
        "burying_Point_key": "web_open",
        "key": Page.URL.getParameter("key"),
        "build_id": Page.URL.getParameter("buildid"),
        "time": getTimeString(),
        "useragent": "web"
      };
      sendBuriedPoint(postdata);
    },
    //开始定位
    open_location: function (floor, x, y) {
      var postdata = {
        "userid": getUserId(),
        "burying_Point_key": "web_openlocation",
        "build_id": Page.URL.getParameter("buildid"),
        "key": Page.URL.getParameter("key"),
        "time": getTimeString(),
        "floor": floor,
        "x": x,
        "y": y,
        "useragent": "web"
      };
      sendBuriedPoint(postdata);
    },
    //路线规划
    navigation_route: function (start, end) {
      var postdata = {
        "userid": getUserId(),
        "burying_Point_key": "web_navigation_route",
        "key": Page.URL.getParameter("key"),
        "build_id": Page.URL.getParameter("buildid"),
        "time": getTimeString(),
        "start_floor": start.floor,
        "start_x": start.x,
        "start_y": start.y,
        "end_floor": end.floor,
        "end_x": end.x,
        "end_y": end.y,
        "useragent": "web"
      };
      sendBuriedPoint(postdata);
    },
    //poi搜索
    search_poi: function (poiname) {
      var postdata = {
        "userid": getUserId(),
        "burying_Point_key": "web_search_poi",
        "key": Page.URL.getParameter("key"),
        "build_id": Page.URL.getParameter("buildid"),
        "time": getTimeString(),
        "floor": Rtmap.Scene.getNowFloor(),
        "poi_name": poiname,
        "useragent": "web"
      };
      sendBuriedPoint(postdata);
    },
    //分类搜索
    search_tag: function (tag) {
      var postdata = {
        "userid": getUserId(),
        "burying_Point_key": "web_search_tag",
        "key": Page.URL.getParameter("key"),
        "build_id": Page.URL.getParameter("buildid"),
        "time": getTimeString(),
        "floor": Rtmap.Scene.getNowFloor(),
        "tag": tag,
        "useragent": "web"
      };
      sendBuriedPoint(postdata);
    },
    //退出地图
    close_map: function () {
      var postdata = {
        "userid": getUserId(),
        "burying_Point_key": "web_closemap",
        "key": Page.URL.getParameter("key"),
        "build_id": Page.URL.getParameter("buildid"),
        "time": getTimeString(),
        "useragent": "web"
      };
      sendBuriedPoint(postdata);
    }
  }

})();

/*微信用户头像ICON*/
(function () {
  var UserProfileIcon = L.Icon.extend({
    options: L.extend({
      className: 'leaflet-div-user-profile-icon',
      getIconUrl: function () {
        //if (L.Browser.retina) - use 2x version
        //return L.Icon.Default.imagePath + '/marker-user-profile.png'
        //CDN图片出错,临时方案
        return 'https://maps.rtmap.com/latest/public/js/vendor/leaflet/images/marker-user-profile.png'
      },
      userIconImgUrl: ""
    }, new L.Icon.Default().options),
    initialize: function (options) {
      L.extend(options, {
        shadowUrl: '' //L.Icon.Default.imagePath + '/marker-shadow.png'
      });
      L.setOptions(this, options);
      var iconUrl = this.options.getIconUrl();
      this._iconImg = this._createImg(iconUrl);
    },
    createIcon: function () {
      this._userIconImg = document.createElement('img');
      this._userIconImg.className = 'user-icon';
      this._userIconImg.src = this.options.userIconImgUrl;

      var div = document.createElement('div');
      div.appendChild(this._iconImg);
      div.appendChild(this._userIconImg);

      this._setIconStyles(div, 'icon');
      this._iconImg.src = this.options.getIconUrl();
      L.DomUtil.addClass(this._iconImg, "leaflet-marker-user-profile-icon");
      return div;
    }
  });

  function _createUserProfileMarker(map, lat, lng, userImgUrl) {
    var icon = new UserProfileIcon({
      userIconImgUrl: userImgUrl
    });
    var marker = L.marker([lat, lng], {
      icon: icon
    }).addTo(map);
    return marker;
  }

  window.Rtmap.Extend = {
    //添加用户头像
    createUserProfileMarker: _createUserProfileMarker
  };
}());

/*L.Maker按角度旋转*/
(function () {
  // save these original methods before they are overwritten
  var proto_initIcon = L.Marker.prototype._initIcon;
  var proto_setPos = L.Marker.prototype._setPos;

  var oldIE = (L.DomUtil.TRANSFORM === 'msTransform');

  L.Marker.addInitHook(function () {
    var iconAnchor = this.options.icon.options.iconAnchor;
    if (iconAnchor) {
      iconAnchor = (iconAnchor[0] + 'px ' + iconAnchor[1] + 'px');
    }
    this.options.rotationOrigin = this.options.rotationOrigin || iconAnchor || 'center bottom';
    this.options.rotationAngle = this.options.rotationAngle || 0;
  });

  L.Marker.include({
    _initIcon: function () {
      proto_initIcon.call(this);
    },

    _setPos: function (pos) {
      proto_setPos.call(this, pos);

      if (this.options.rotationAngle) {
        this._icon.style[L.DomUtil.TRANSFORM + 'Origin'] = this.options.rotationOrigin;

        if (oldIE) {
          // for IE 9, use the 2D rotation
          this._icon.style[L.DomUtil.TRANSFORM] = ' rotate(' + this.options.rotationAngle + 'deg)';
        } else {
          // for modern browsers, prefer the 3D accelerated version
          this._icon.style[L.DomUtil.TRANSFORM] += ' rotateZ(' + this.options.rotationAngle + 'deg)';
        }
        var userImage = this._icon.getElementsByClassName("user-icon")[0];
        if (userImage) {
          if (oldIE) {
            // for IE 9, use the 2D rotation
            userImage.style[L.DomUtil.TRANSFORM] = ' rotate(' + (-this.options.rotationAngle) + 'deg)';
          } else {
            // for modern browsers, prefer the 3D accelerated version
            userImage.style[L.DomUtil.TRANSFORM] = ' rotateZ(' + (-this.options.rotationAngle) + 'deg)';
          }
        }
      }
    },

    setRotationAngle: function (angle) {
      this.options.rotationAngle = angle;
      this.update();
      return this;
    },

    setRotationOrigin: function (origin) {
      this.options.rotationOrigin = origin;
      this.update();
      return this;
    }
  });
})();
