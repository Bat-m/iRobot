(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlin-wrappers-kotlin-react-dom-js-legacy', 'kotlinx-coroutines-core', 'kotlinx-html-js', 'kotlin-wrappers-kotlin-react-js-legacy'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlin-wrappers-kotlin-react-dom-js-legacy'), require('kotlinx-coroutines-core'), require('kotlinx-html-js'), require('kotlin-wrappers-kotlin-react-js-legacy'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'iHoover'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'iHoover'.");
    }if (typeof this['kotlin-wrappers-kotlin-react-dom-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'iHoover'. Its dependency 'kotlin-wrappers-kotlin-react-dom-js-legacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-dom-js-legacy' is loaded prior to 'iHoover'.");
    }if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'iHoover'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'iHoover'.");
    }if (typeof this['kotlinx-html-js'] === 'undefined') {
      throw new Error("Error loading module 'iHoover'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'iHoover'.");
    }if (typeof this['kotlin-wrappers-kotlin-react-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'iHoover'. Its dependency 'kotlin-wrappers-kotlin-react-js-legacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-js-legacy' is loaded prior to 'iHoover'.");
    }root.iHoover = factory(typeof iHoover === 'undefined' ? {} : iHoover, kotlin, this['kotlin-wrappers-kotlin-react-dom-js-legacy'], this['kotlinx-coroutines-core'], this['kotlinx-html-js'], this['kotlin-wrappers-kotlin-react-js-legacy']);
  }
}(this, function (_, Kotlin, $module$kotlin_wrappers_kotlin_react_dom_js_legacy, $module$kotlinx_coroutines_core, $module$kotlinx_html_js, $module$kotlin_wrappers_kotlin_react_js_legacy) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var getKClass = Kotlin.getKClass;
  var Unit = Kotlin.kotlin.Unit;
  var render = $module$kotlin_wrappers_kotlin_react_dom_js_legacy.react.dom.render_2955dm$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var L1000 = Kotlin.Long.fromInt(1000);
  var delay = $module$kotlinx_coroutines_core.kotlinx.coroutines.delay_s8cxhz$;
  var coroutineScope = $module$kotlinx_coroutines_core.kotlinx.coroutines.coroutineScope_awg8ri$;
  var InputType = $module$kotlinx_html_js.kotlinx.html.InputType;
  var throwCCE = Kotlin.throwCCE;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var set_onChangeFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onChangeFunction_pszlq2$;
  var set_onClickFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onClickFunction_pszlq2$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var equals = Kotlin.equals;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var RComponent_init = $module$kotlin_wrappers_kotlin_react_js_legacy.react.RComponent_init_8bz2yq$;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var CoroutineScope = $module$kotlinx_coroutines_core.kotlinx.coroutines.CoroutineScope_1fupul$;
  var RComponent = $module$kotlin_wrappers_kotlin_react_js_legacy.react.RComponent;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var attributesMapOf = $module$kotlin_wrappers_kotlin_react_dom_js_legacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
  var DIV_init = $module$kotlin_wrappers_kotlin_react_dom_js_legacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIV;
  var RDOMBuilder = $module$kotlin_wrappers_kotlin_react_dom_js_legacy.react.dom.RDOMBuilder;
  var enumEncode = $module$kotlin_wrappers_kotlin_react_dom_js_legacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
  var attributesMapOf_0 = $module$kotlin_wrappers_kotlin_react_dom_js_legacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
  var INPUT_init = $module$kotlin_wrappers_kotlin_react_dom_js_legacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.INPUT;
  IHoover.prototype = Object.create(RComponent.prototype);
  IHoover.prototype.constructor = IHoover;
  function main$lambda$lambda$lambda$lambda($receiver) {
    $receiver.name = 'Kotlin/JS';
    return Unit;
  }
  function main$lambda$lambda$lambda($receiver) {
    $receiver.attrs_slhiwc$(main$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function main$lambda$lambda($receiver) {
    $receiver.child_ssazr1$(getKClass(IHoover), main$lambda$lambda$lambda);
    return Unit;
  }
  function main$lambda(it) {
    render(document.getElementById('root'), void 0, main$lambda$lambda);
    return Unit;
  }
  function main() {
    window.onload = main$lambda;
  }
  function div$lambda(closure$classes) {
    return function (it) {
      return new DIV_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function input$lambda(closure$type, closure$formEncType, closure$formMethod, closure$name, closure$classes) {
    return function (it) {
      return new INPUT_init(attributesMapOf_0(['type', closure$type != null ? enumEncode(closure$type) : null, 'formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'name', closure$name, 'class', closure$classes]), it);
    };
  }
  function CoordsProps(x, y, orientation) {
    this.x = x;
    this.y = y;
    this.orientation = orientation;
  }
  CoordsProps.$metadata$ = {kind: Kind_CLASS, simpleName: 'CoordsProps', interfaces: []};
  CoordsProps.prototype.component1 = function () {
    return this.x;
  };
  CoordsProps.prototype.component2 = function () {
    return this.y;
  };
  CoordsProps.prototype.component3 = function () {
    return this.orientation;
  };
  CoordsProps.prototype.copy_98i29q$ = function (x, y, orientation) {
    return new CoordsProps(x === void 0 ? this.x : x, y === void 0 ? this.y : y, orientation === void 0 ? this.orientation : orientation);
  };
  CoordsProps.prototype.toString = function () {
    return 'CoordsProps(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + (', orientation=' + Kotlin.toString(this.orientation)) + ')';
  };
  CoordsProps.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    result = result * 31 + Kotlin.hashCode(this.orientation) | 0;
    return result;
  };
  CoordsProps.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.orientation, other.orientation)))));
  };
  function CurrentCoordsProps(x, y, orientation) {
    this.x = x;
    this.y = y;
    this.orientation = orientation;
  }
  CurrentCoordsProps.$metadata$ = {kind: Kind_CLASS, simpleName: 'CurrentCoordsProps', interfaces: []};
  CurrentCoordsProps.prototype.component1 = function () {
    return this.x;
  };
  CurrentCoordsProps.prototype.component2 = function () {
    return this.y;
  };
  CurrentCoordsProps.prototype.component3 = function () {
    return this.orientation;
  };
  CurrentCoordsProps.prototype.copy_98i29q$ = function (x, y, orientation) {
    return new CurrentCoordsProps(x === void 0 ? this.x : x, y === void 0 ? this.y : y, orientation === void 0 ? this.orientation : orientation);
  };
  CurrentCoordsProps.prototype.toString = function () {
    return 'CurrentCoordsProps(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + (', orientation=' + Kotlin.toString(this.orientation)) + ')';
  };
  CurrentCoordsProps.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    result = result * 31 + Kotlin.hashCode(this.orientation) | 0;
    return result;
  };
  CurrentCoordsProps.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.orientation, other.orientation)))));
  };
  function GridProps(x, y) {
    this.x = x;
    this.y = y;
  }
  GridProps.$metadata$ = {kind: Kind_CLASS, simpleName: 'GridProps', interfaces: []};
  GridProps.prototype.component1 = function () {
    return this.x;
  };
  GridProps.prototype.component2 = function () {
    return this.y;
  };
  GridProps.prototype.copy_vux9f0$ = function (x, y) {
    return new GridProps(x === void 0 ? this.x : x, y === void 0 ? this.y : y);
  };
  GridProps.prototype.toString = function () {
    return 'GridProps(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + ')';
  };
  GridProps.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    return result;
  };
  GridProps.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y)))));
  };
  function IHooverState(name, coords, grid, instruct, currentCoords) {
    this.name = name;
    this.coords = coords;
    this.grid = grid;
    this.instruct = instruct;
    this.currentCoords = currentCoords;
  }
  IHooverState.$metadata$ = {kind: Kind_CLASS, simpleName: 'IHooverState', interfaces: []};
  IHooverState.prototype.component1 = function () {
    return this.name;
  };
  IHooverState.prototype.component2 = function () {
    return this.coords;
  };
  IHooverState.prototype.component3 = function () {
    return this.grid;
  };
  IHooverState.prototype.component4 = function () {
    return this.instruct;
  };
  IHooverState.prototype.component5 = function () {
    return this.currentCoords;
  };
  IHooverState.prototype.copy_yribdd$ = function (name, coords, grid, instruct, currentCoords) {
    return new IHooverState(name === void 0 ? this.name : name, coords === void 0 ? this.coords : coords, grid === void 0 ? this.grid : grid, instruct === void 0 ? this.instruct : instruct, currentCoords === void 0 ? this.currentCoords : currentCoords);
  };
  IHooverState.prototype.toString = function () {
    return 'IHooverState(name=' + Kotlin.toString(this.name) + (', coords=' + Kotlin.toString(this.coords)) + (', grid=' + Kotlin.toString(this.grid)) + (', instruct=' + Kotlin.toString(this.instruct)) + (', currentCoords=' + Kotlin.toString(this.currentCoords)) + ')';
  };
  IHooverState.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.coords) | 0;
    result = result * 31 + Kotlin.hashCode(this.grid) | 0;
    result = result * 31 + Kotlin.hashCode(this.instruct) | 0;
    result = result * 31 + Kotlin.hashCode(this.currentCoords) | 0;
    return result;
  };
  IHooverState.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.coords, other.coords) && Kotlin.equals(this.grid, other.grid) && Kotlin.equals(this.instruct, other.instruct) && Kotlin.equals(this.currentCoords, other.currentCoords)))));
  };
  function IHoover(props) {
    RComponent_init(props, this);
    var initialCoords = new CoordsProps(5, 5, 'N');
    var initialGrid = new GridProps(10, 10);
    var initialInstruction = 'DADADADAA';
    var initialCurrentCoords = new CurrentCoordsProps(initialCoords.x, initialCoords.y, initialCoords.orientation);
    this.state = new IHooverState(props.name, initialCoords, initialGrid, initialInstruction, initialCurrentCoords);
    this.coroutineScope = CoroutineScope(coroutines.GlobalScope.coroutineContext);
    this.job = null;
  }
  function IHoover$render$lambda$lambda$lambda$lambda(this$IHoover, closure$newGridX) {
    return function (it) {
      return new IHooverState(this$IHoover.state.name, this$IHoover.state.coords, this$IHoover.state.grid.copy_vux9f0$(closure$newGridX), this$IHoover.state.instruct, this$IHoover.state.currentCoords);
    };
  }
  function IHoover$render$lambda$lambda$lambda(this$IHoover) {
    return function (event) {
      var tmp$;
      var newGridX = toInt((Kotlin.isType(tmp$ = event.target, HTMLInputElement) ? tmp$ : throwCCE()).value);
      this$IHoover.setState(IHoover$render$lambda$lambda$lambda$lambda(this$IHoover, newGridX));
      return Unit;
    };
  }
  function IHoover$render$lambda$lambda$lambda$lambda_0(this$IHoover, closure$newGridY) {
    return function (it) {
      return new IHooverState(this$IHoover.state.name, this$IHoover.state.coords, this$IHoover.state.grid.copy_vux9f0$(void 0, closure$newGridY), this$IHoover.state.instruct, this$IHoover.state.currentCoords);
    };
  }
  function IHoover$render$lambda$lambda$lambda_0(this$IHoover) {
    return function (event) {
      var tmp$;
      var newGridY = toInt((Kotlin.isType(tmp$ = event.target, HTMLInputElement) ? tmp$ : throwCCE()).value);
      this$IHoover.setState(IHoover$render$lambda$lambda$lambda$lambda_0(this$IHoover, newGridY));
      return Unit;
    };
  }
  function IHoover$render$lambda$lambda$lambda$lambda_1(this$IHoover, closure$newX) {
    return function (it) {
      return new IHooverState(this$IHoover.state.name, this$IHoover.state.coords.copy_98i29q$(closure$newX), this$IHoover.state.grid, this$IHoover.state.instruct, this$IHoover.state.currentCoords);
    };
  }
  function IHoover$render$lambda$lambda$lambda_1(this$IHoover) {
    return function (event) {
      var tmp$;
      var newX = toInt((Kotlin.isType(tmp$ = event.target, HTMLInputElement) ? tmp$ : throwCCE()).value);
      this$IHoover.setState(IHoover$render$lambda$lambda$lambda$lambda_1(this$IHoover, newX));
      return Unit;
    };
  }
  function IHoover$render$lambda$lambda$lambda$lambda_2(this$IHoover, closure$newY) {
    return function (it) {
      var updatedCoordsY = this$IHoover.state.coords.copy_98i29q$(void 0, closure$newY);
      return new IHooverState(this$IHoover.state.name, updatedCoordsY, this$IHoover.state.grid, this$IHoover.state.instruct, this$IHoover.state.currentCoords);
    };
  }
  function IHoover$render$lambda$lambda$lambda_2(this$IHoover) {
    return function (event) {
      var tmp$;
      var newY = toInt((Kotlin.isType(tmp$ = event.target, HTMLInputElement) ? tmp$ : throwCCE()).value);
      this$IHoover.setState(IHoover$render$lambda$lambda$lambda$lambda_2(this$IHoover, newY));
      return Unit;
    };
  }
  function IHoover$render$lambda$lambda$lambda$lambda_3(this$IHoover, closure$newOrientation) {
    return function (it) {
      var updatedCoordsOrientation = this$IHoover.state.coords.copy_98i29q$(void 0, void 0, closure$newOrientation);
      return new IHooverState(this$IHoover.state.name, updatedCoordsOrientation, this$IHoover.state.grid, this$IHoover.state.instruct, this$IHoover.state.currentCoords);
    };
  }
  function IHoover$render$lambda$lambda$lambda_3(this$IHoover) {
    return function (event) {
      var tmp$;
      var newOrientation = (Kotlin.isType(tmp$ = event.target, HTMLInputElement) ? tmp$ : throwCCE()).value;
      this$IHoover.setState(IHoover$render$lambda$lambda$lambda$lambda_3(this$IHoover, newOrientation));
      return Unit;
    };
  }
  function IHoover$render$lambda$lambda$lambda$lambda_4(this$IHoover, closure$newInstruction) {
    return function (it) {
      return new IHooverState(this$IHoover.state.name, this$IHoover.state.coords, this$IHoover.state.grid, closure$newInstruction, this$IHoover.state.currentCoords);
    };
  }
  function IHoover$render$lambda$lambda$lambda_4(this$IHoover) {
    return function (event) {
      var tmp$;
      var newInstruction = (Kotlin.isType(tmp$ = event.target, HTMLInputElement) ? tmp$ : throwCCE()).value;
      this$IHoover.setState(IHoover$render$lambda$lambda$lambda$lambda_4(this$IHoover, newInstruction));
      return Unit;
    };
  }
  function IHoover$render$lambda$lambda$lambda_5(this$IHoover) {
    return function (event) {
      var tmp$;
      (tmp$ = this$IHoover.job) != null ? (tmp$.cancel_x5z25k$(), Unit) : null;
      return Unit;
    };
  }
  function IHoover$render$lambda$lambda$lambda$lambda$lambda$lambda(this$IHoover) {
    return function (it) {
      return new IHooverState(this$IHoover.state.name, this$IHoover.state.coords, this$IHoover.state.grid, this$IHoover.state.instruct, this$IHoover.state.currentCoords.copy_98i29q$(void 0, void 0, 'E'));
    };
  }
  function IHoover$render$lambda$lambda$lambda$lambda$lambda$lambda_0(this$IHoover) {
    return function (it) {
      return new IHooverState(this$IHoover.state.name, this$IHoover.state.coords, this$IHoover.state.grid, this$IHoover.state.instruct, this$IHoover.state.currentCoords.copy_98i29q$(void 0, void 0, 'O'));
    };
  }
  function IHoover$render$lambda$lambda$lambda$lambda$lambda$lambda_1(this$IHoover) {
    return function (it) {
      return new IHooverState(this$IHoover.state.name, this$IHoover.state.coords, this$IHoover.state.grid, this$IHoover.state.instruct, this$IHoover.state.currentCoords.copy_98i29q$(void 0, void 0, 'S'));
    };
  }
  function IHoover$render$lambda$lambda$lambda$lambda$lambda$lambda_2(this$IHoover) {
    return function (it) {
      return new IHooverState(this$IHoover.state.name, this$IHoover.state.coords, this$IHoover.state.grid, this$IHoover.state.instruct, this$IHoover.state.currentCoords.copy_98i29q$(void 0, void 0, 'N'));
    };
  }
  function IHoover$render$lambda$lambda$lambda$lambda$lambda$lambda_3(this$IHoover) {
    return function (it) {
      return new IHooverState(this$IHoover.state.name, this$IHoover.state.coords, this$IHoover.state.grid, this$IHoover.state.instruct, this$IHoover.state.currentCoords.copy_98i29q$(void 0, this$IHoover.state.currentCoords.y + 1 | 0));
    };
  }
  function IHoover$render$lambda$lambda$lambda$lambda$lambda$lambda_4(this$IHoover) {
    return function (it) {
      return new IHooverState(this$IHoover.state.name, this$IHoover.state.coords, this$IHoover.state.grid, this$IHoover.state.instruct, this$IHoover.state.currentCoords.copy_98i29q$(void 0, this$IHoover.state.currentCoords.y - 1 | 0));
    };
  }
  function IHoover$render$lambda$lambda$lambda$lambda$lambda$lambda_5(this$IHoover) {
    return function (it) {
      return new IHooverState(this$IHoover.state.name, this$IHoover.state.coords, this$IHoover.state.grid, this$IHoover.state.instruct, this$IHoover.state.currentCoords.copy_98i29q$(this$IHoover.state.currentCoords.x + 1 | 0));
    };
  }
  function IHoover$render$lambda$lambda$lambda$lambda$lambda$lambda_6(this$IHoover) {
    return function (it) {
      return new IHooverState(this$IHoover.state.name, this$IHoover.state.coords, this$IHoover.state.grid, this$IHoover.state.instruct, this$IHoover.state.currentCoords.copy_98i29q$(this$IHoover.state.currentCoords.x - 1 | 0));
    };
  }
  function Coroutine$IHoover$render$lambda$lambda$lambda$lambda$lambda(this$IHoover_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$IHoover = this$IHoover_0;
    this.local$tmp$ = void 0;
    this.local$i = void 0;
  }
  Coroutine$IHoover$render$lambda$lambda$lambda$lambda$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$IHoover$render$lambda$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$IHoover$render$lambda$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$IHoover$render$lambda$lambda$lambda$lambda$lambda;
  Coroutine$IHoover$render$lambda$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.local$this$IHoover.state.instruct.length;
            this.local$i = 0;
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (this.local$i >= this.local$tmp$) {
              this.state_0 = 5;
              continue;
            }
            println('instructions:' + String.fromCharCode(this.local$this$IHoover.state.instruct.charCodeAt(this.local$i)));
            if (this.local$this$IHoover.state.instruct.charCodeAt(this.local$i) === 68 && equals(this.local$this$IHoover.state.currentCoords.orientation, 'N') || (this.local$this$IHoover.state.instruct.charCodeAt(this.local$i) === 71 && equals(this.local$this$IHoover.state.currentCoords.orientation, 'S'))) {
              println('state  1 instructions:' + String.fromCharCode(this.local$this$IHoover.state.instruct.charCodeAt(this.local$i)) + ' orientation:' + this.local$this$IHoover.state.currentCoords.orientation + ' ');
              this.local$this$IHoover.setState(IHoover$render$lambda$lambda$lambda$lambda$lambda$lambda(this.local$this$IHoover));
            } else if (this.local$this$IHoover.state.instruct.charCodeAt(this.local$i) === 71 && equals(this.local$this$IHoover.state.currentCoords.orientation, 'N') || (this.local$this$IHoover.state.instruct.charCodeAt(this.local$i) === 68 && equals(this.local$this$IHoover.state.currentCoords.orientation, 'S'))) {
              println('state  2 instructions:' + String.fromCharCode(this.local$this$IHoover.state.instruct.charCodeAt(this.local$i)) + ' orientation:' + this.local$this$IHoover.state.currentCoords.orientation + ' ');
              this.local$this$IHoover.setState(IHoover$render$lambda$lambda$lambda$lambda$lambda$lambda_0(this.local$this$IHoover));
            } else if (this.local$this$IHoover.state.instruct.charCodeAt(this.local$i) === 68 && equals(this.local$this$IHoover.state.currentCoords.orientation, 'E') || (this.local$this$IHoover.state.instruct.charCodeAt(this.local$i) === 71 && equals(this.local$this$IHoover.state.currentCoords.orientation, 'O'))) {
              println('state  3 instructions:' + String.fromCharCode(this.local$this$IHoover.state.instruct.charCodeAt(this.local$i)) + ' orientation:' + this.local$this$IHoover.state.currentCoords.orientation + ' ');
              this.local$this$IHoover.setState(IHoover$render$lambda$lambda$lambda$lambda$lambda$lambda_1(this.local$this$IHoover));
            } else if (this.local$this$IHoover.state.instruct.charCodeAt(this.local$i) === 71 && equals(this.local$this$IHoover.state.currentCoords.orientation, 'E') || (this.local$this$IHoover.state.instruct.charCodeAt(this.local$i) === 68 && equals(this.local$this$IHoover.state.currentCoords.orientation, 'O'))) {
              println('state  4 instructions:' + String.fromCharCode(this.local$this$IHoover.state.instruct.charCodeAt(this.local$i)) + ' orientation:' + this.local$this$IHoover.state.currentCoords.orientation + ' ');
              this.local$this$IHoover.setState(IHoover$render$lambda$lambda$lambda$lambda$lambda$lambda_2(this.local$this$IHoover));
            }
            this.state_0 = 3;
            this.result_0 = delay(L1000, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            if (this.local$this$IHoover.state.instruct.charCodeAt(this.local$i) === 65 && equals(this.local$this$IHoover.state.currentCoords.orientation, 'N') && this.local$this$IHoover.state.currentCoords.y < this.local$this$IHoover.state.grid.y) {
              println('state  A N');
              this.local$this$IHoover.setState(IHoover$render$lambda$lambda$lambda$lambda$lambda$lambda_3(this.local$this$IHoover));
            } else if (this.local$this$IHoover.state.instruct.charCodeAt(this.local$i) === 65 && equals(this.local$this$IHoover.state.currentCoords.orientation, 'S') && this.local$this$IHoover.state.currentCoords.y > 0) {
              println('state  A S');
              this.local$this$IHoover.setState(IHoover$render$lambda$lambda$lambda$lambda$lambda$lambda_4(this.local$this$IHoover));
            } else if (this.local$this$IHoover.state.instruct.charCodeAt(this.local$i) === 65 && equals(this.local$this$IHoover.state.currentCoords.orientation, 'E') && this.local$this$IHoover.state.currentCoords.x < this.local$this$IHoover.state.grid.x) {
              println('state  A E');
              this.local$this$IHoover.setState(IHoover$render$lambda$lambda$lambda$lambda$lambda$lambda_5(this.local$this$IHoover));
            } else if (this.local$this$IHoover.state.instruct.charCodeAt(this.local$i) === 65 && equals(this.local$this$IHoover.state.currentCoords.orientation, 'O') && this.local$this$IHoover.state.currentCoords.x > 0) {
              println('state  A O');
              this.local$this$IHoover.setState(IHoover$render$lambda$lambda$lambda$lambda$lambda$lambda_6(this.local$this$IHoover));
            }
            this.state_0 = 4;
            continue;
          case 4:
            this.local$i++;
            this.state_0 = 2;
            continue;
          case 5:
            return println('end 1'), Unit;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function IHoover$render$lambda$lambda$lambda$lambda$lambda(this$IHoover_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$IHoover$render$lambda$lambda$lambda$lambda$lambda(this$IHoover_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$IHoover$render$lambda$lambda$lambda$lambda(this$IHoover_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$IHoover = this$IHoover_0;
  }
  Coroutine$IHoover$render$lambda$lambda$lambda$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$IHoover$render$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$IHoover$render$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$IHoover$render$lambda$lambda$lambda$lambda;
  Coroutine$IHoover$render$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = coroutineScope(IHoover$render$lambda$lambda$lambda$lambda$lambda(this.local$this$IHoover), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return println('end 2'), Unit;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function IHoover$render$lambda$lambda$lambda$lambda_5(this$IHoover_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$IHoover$render$lambda$lambda$lambda$lambda(this$IHoover_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function IHoover$render$lambda$lambda$lambda_6(this$IHoover) {
    return function (it) {
      println('test start');
      this$IHoover.job = launch(this$IHoover.coroutineScope, void 0, void 0, IHoover$render$lambda$lambda$lambda$lambda_5(this$IHoover));
      return Unit;
    };
  }
  IHoover.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(div$lambda(null));
    $receiver_0.unaryPlus_pdl1vz$('Dimmension de la grille: ' + this.state.grid);
    $receiver.child_52psg1$($receiver_0.create());
    var $receiver_0_0 = RDOMBuilder.Companion.invoke_f6ihu2$(input$lambda(null, null, null, null, null));
    var $receiver_1 = $receiver_0_0.attrs;
    $receiver_1.type = InputType.text;
    $receiver_1.value = this.state.grid.x.toString();
    set_onChangeFunction($receiver_1, IHoover$render$lambda$lambda$lambda(this));
    $receiver.child_52psg1$($receiver_0_0.create());
    var $receiver_0_1 = RDOMBuilder.Companion.invoke_f6ihu2$(input$lambda(null, null, null, null, null));
    var $receiver_2 = $receiver_0_1.attrs;
    $receiver_2.type = InputType.text;
    $receiver_2.value = this.state.grid.y.toString();
    set_onChangeFunction($receiver_2, IHoover$render$lambda$lambda$lambda_0(this));
    $receiver.child_52psg1$($receiver_0_1.create());
    var $receiver_0_2 = RDOMBuilder.Companion.invoke_f6ihu2$(div$lambda(null));
    $receiver_0_2.unaryPlus_pdl1vz$('Position initiale: ' + this.state.coords);
    $receiver.child_52psg1$($receiver_0_2.create());
    var $receiver_0_3 = RDOMBuilder.Companion.invoke_f6ihu2$(div$lambda(null));
    $receiver_0_3.unaryPlus_pdl1vz$('X:  ' + this.state.coords.x);
    $receiver.child_52psg1$($receiver_0_3.create());
    var $receiver_0_4 = RDOMBuilder.Companion.invoke_f6ihu2$(input$lambda(null, null, null, null, null));
    var $receiver_3 = $receiver_0_4.attrs;
    $receiver_3.type = InputType.text;
    $receiver_3.value = this.state.coords.x.toString();
    set_onChangeFunction($receiver_3, IHoover$render$lambda$lambda$lambda_1(this));
    $receiver.child_52psg1$($receiver_0_4.create());
    var $receiver_0_5 = RDOMBuilder.Companion.invoke_f6ihu2$(div$lambda(null));
    $receiver_0_5.unaryPlus_pdl1vz$('Y:  ' + this.state.coords.y);
    $receiver.child_52psg1$($receiver_0_5.create());
    var $receiver_0_6 = RDOMBuilder.Companion.invoke_f6ihu2$(input$lambda(null, null, null, null, null));
    var $receiver_4 = $receiver_0_6.attrs;
    $receiver_4.type = InputType.text;
    $receiver_4.value = this.state.coords.y.toString();
    set_onChangeFunction($receiver_4, IHoover$render$lambda$lambda$lambda_2(this));
    $receiver.child_52psg1$($receiver_0_6.create());
    var $receiver_0_7 = RDOMBuilder.Companion.invoke_f6ihu2$(div$lambda(null));
    $receiver_0_7.unaryPlus_pdl1vz$('Orientation:  ' + this.state.coords.orientation);
    $receiver.child_52psg1$($receiver_0_7.create());
    var $receiver_0_8 = RDOMBuilder.Companion.invoke_f6ihu2$(input$lambda(null, null, null, null, null));
    var $receiver_5 = $receiver_0_8.attrs;
    $receiver_5.type = InputType.text;
    $receiver_5.value = this.state.coords.orientation;
    set_onChangeFunction($receiver_5, IHoover$render$lambda$lambda$lambda_3(this));
    $receiver.child_52psg1$($receiver_0_8.create());
    var $receiver_0_9 = RDOMBuilder.Companion.invoke_f6ihu2$(div$lambda(null));
    $receiver_0_9.unaryPlus_pdl1vz$('Instructions: ' + this.state.instruct);
    $receiver.child_52psg1$($receiver_0_9.create());
    var $receiver_0_10 = RDOMBuilder.Companion.invoke_f6ihu2$(input$lambda(null, null, null, null, null));
    var $receiver_6 = $receiver_0_10.attrs;
    $receiver_6.type = InputType.text;
    $receiver_6.value = this.state.instruct;
    set_onChangeFunction($receiver_6, IHoover$render$lambda$lambda$lambda_4(this));
    $receiver.child_52psg1$($receiver_0_10.create());
    var $receiver_0_11 = RDOMBuilder.Companion.invoke_f6ihu2$(input$lambda(null, null, null, null, null));
    var $receiver_7 = $receiver_0_11.attrs;
    $receiver_7.type = InputType.button;
    $receiver_7.value = 'Stop le robot';
    set_onClickFunction($receiver_7, IHoover$render$lambda$lambda$lambda_5(this));
    $receiver.child_52psg1$($receiver_0_11.create());
    var $receiver_0_12 = RDOMBuilder.Companion.invoke_f6ihu2$(input$lambda(null, null, null, null, null));
    var $receiver_8 = $receiver_0_12.attrs;
    $receiver_8.type = InputType.button;
    $receiver_8.value = 'D\xE9marrer le robot';
    set_onClickFunction($receiver_8, IHoover$render$lambda$lambda$lambda_6(this));
    $receiver.child_52psg1$($receiver_0_12.create());
    var $receiver_0_13 = RDOMBuilder.Companion.invoke_f6ihu2$(div$lambda(null));
    $receiver_0_13.unaryPlus_pdl1vz$('Coordon\xE9es actuel du robot: ' + this.state.currentCoords);
    $receiver.child_52psg1$($receiver_0_13.create());
  };
  IHoover.$metadata$ = {kind: Kind_CLASS, simpleName: 'IHoover', interfaces: [RComponent]};
  _.main = main;
  _.CoordsProps = CoordsProps;
  _.CurrentCoordsProps = CurrentCoordsProps;
  _.GridProps = GridProps;
  _.IHooverState = IHooverState;
  $$importsForInline$$['kotlin-wrappers-kotlin-react-dom-js-legacy'] = $module$kotlin_wrappers_kotlin_react_dom_js_legacy;
  _.IHoover = IHoover;
  main();
  return _;
}));

//# sourceMappingURL=iHoover.js.map
