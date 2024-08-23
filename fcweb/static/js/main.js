(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0], {
  34 : (function(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(63)
  }),
  46 : (function(module, exports, __webpack_require__) {}),
  48 : (function(module, exports, __webpack_require__) {}),
  56 : (function(module, exports, __webpack_require__) {}),
  58 : (function(module, exports, __webpack_require__) {}),
  61 : (function(module, exports, __webpack_require__) {}),
  63 : (function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    var singleton = __webpack_require__(14);
    var singleton_default = __webpack_require__.n(singleton);
    var react = __webpack_require__(1);
    var react_default = __webpack_require__.n(react);
    var react_dom = __webpack_require__(15);
    var react_dom_default = __webpack_require__.n(react_dom);
    var classCallCheck = __webpack_require__(4);
    var createClass = __webpack_require__(6);
    var possibleConstructorReturn = __webpack_require__(9);
    var getPrototypeOf = __webpack_require__(8);
    var inherits = __webpack_require__(10);
    var esm = __webpack_require__(64);
    var HashRouter = __webpack_require__(66);
    var Route = __webpack_require__(67);
    var src_ListPage = __webpack_require__(46);
    var reactstrap_es = __webpack_require__(7);
    var Link = __webpack_require__(65);
    var config = {
      ROMS: {
       
      },
      GOOGLE_ANALYTICS_CODE: Object({
        "NODE_ENV": "production",
        "PUBLIC_URL": ""
      }).REACT_APP_GOOGLE_ANALYTICS_CODE,
      SENTRY_URI: Object({
        "NODE_ENV": "production",
        "PUBLIC_URL": ""
      }).REACT_APP_SENTRY_URI
    };
    var src_config = (config);
    var ListPage_ListPage = function(_Component) {
      Object(inherits["a"])(ListPage, _Component);
      function ListPage() {
        var _getPrototypeOf2;
        var _this;
        Object(classCallCheck["a"])(this, ListPage);
        for (var _len = arguments.length,
        args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key]
        }
        _this = Object(possibleConstructorReturn["a"])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a"])(ListPage)).call.apply(_getPrototypeOf2, [this].concat(args)));
        _this.handleDragOver = function(e) {
          e.preventDefault();
          e.dataTransfer.dropEffect = "copy"
        };
        _this.handleDrop = function(e) {
          e.preventDefault();
          var file = e.dataTransfer.items ? e.dataTransfer.items[0].getAsFile() : e.dataTransfer.files[0];
          _this.props.history.push({
            pathname: "/run",
            state: {
              file: file
            }
          })
        };
        return _this
      }
      Object(createClass["a"])(ListPage, [{
        key: "render",
        value: function render() {
          return react_default.a.createElement("div", {
            className: "container ListPage my-4",
            onDragOver: this.handleDragOver,
            onDrop: this.handleDrop
          },
          react_default.a.createElement("div", {
            className: "row justify-content-center"
          },
          react_default.a.createElement("div", {
            className: "col-md-8"
          },
          react_default.a.createElement("header", {
            className: "mb-4"
          },
          react_default.a.createElement("h1", {
            className: "mb-3"
          },
          "拖拽nes到此页面"), react_default.a.createElement(reactstrap_es["b"], {
            className: "mb-4"
          },
          Object.keys(src_config.ROMS).map(function(key) {
            return react_default.a.createElement(Link["a"], {
              key: key,
              to: "/run/" + encodeURIComponent(key),
              className: "list-group-item"
            },
            key, react_default.a.createElement("span", {
              className: "float-right"
            },
            "\u203A"))
          })), react_default.a.createElement("p", null, "英文命名的游戏文件 1.Kira Kira Star Night.nes  2.Mighty Final Fight (J).nes"),		  
		  react_default.a.createElement("p", null, "下载测试游戏： ",react_default.a.createElement("a", {href: "roms/Kira Kira Star Night.nes"},"闪亮亮星星之夜")),
		  react_default.a.createElement("p", null, "下载测试游戏： ",react_default.a.createElement("a", {href: "roms/Mighty Final Fight (J).nes"},"SD快打旋风")),
		  react_default.a.createElement("p", null, "下载福利游戏： ",react_default.a.createElement("a", {href: "roms/amazon_diet_EN.nes"},"守护骑士-亚马逊减肥大作战(EN)")),
		  react_default.a.createElement("p", null, "中文命名的游戏文件 1.超级马里奥1代.nes  2.功夫小子.nes"),
		  react_default.a.createElement("p", null, "下载测试游戏： ",react_default.a.createElement("a", {href: "roms/超级马里奥1代.nes"},"超级马里奥1代")),
		  react_default.a.createElement("p", null, "下载测试游戏： ",react_default.a.createElement("a", {href: "roms/功夫小子.nes"},"功夫小子")),
		  react_default.a.createElement("p", null, "下载福利游戏： ",react_default.a.createElement("a", {href: "roms/amazon_diet_JP.nes"},"守护骑士-亚马逊减肥大作战(JP)")),
		  react_default.a.createElement("p", null, "即刻预览 FC_红白机 游戏 H5_FC在线模拟器 by ", react_default.a.createElement("a", {href: "https://buzhaoshi.top"},"无事阁【www.buzhaoshi.top 或 buzhaoshi.top】"),)))))
        }
      }]);
      return ListPage
    } (react["Component"]);
    var src_ListPage_0 = (ListPage_ListPage);
    var src_RunPage = __webpack_require__(48);
    var defineProperty = __webpack_require__(17);
    var toConsumableArray = __webpack_require__(33);
    var objectSpread = __webpack_require__(30);
    var assertThisInitialized = __webpack_require__(11);
    var src = __webpack_require__(3);
    var ControlMapperRow_ControlMapperRow = function(_Component) {
      Object(inherits["a"])(ControlMapperRow, _Component);
      function ControlMapperRow(props) {
        var _this;
        Object(classCallCheck["a"])(this, ControlMapperRow);
        _this = Object(possibleConstructorReturn["a"])(this, Object(getPrototypeOf["a"])(ControlMapperRow).call(this, props));
        _this.state = {
          playerOneButton: "",
          playerTwoButton: "",
          waitingForKey: 0
        };
        _this.handleClick = _this.handleClick.bind(Object(assertThisInitialized["a"])(Object(assertThisInitialized["a"])(_this)));
        return _this
      }
      Object(createClass["a"])(ControlMapperRow, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var keys = this.props.keys;
          var button = this.props.button;
          var playerButtons = [];
          for (var key in keys) {
            if (keys[key][0] === 1 && keys[key][1] === button) {
              playerButtons[0] = keys[key][2];
              console.log(playerButtons[0])
            } else if (keys[key][0] === 2 && keys[key][1] === button) {
              playerButtons[1] = keys[key][2]
            }
          }
          this.setState({
            playerOneButton: playerButtons[0],
            playerTwoButton: playerButtons[1]
          })
        }
      },
      {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps, prevState) {
          var keys = this.props.keys;
          var button = this.props.button;
          var playerButtons = [];
          var gamepadButton;
          var newButton;
          for (var key in keys) {
            if (keys[key][0] === 1 && keys[key][1] === button) {
              playerButtons[0] = keys[key][2];
              console.log(playerButtons[0])
            } else if (keys[key][0] === 2 && keys[key][1] === button) {
              playerButtons[1] = keys[key][2]
            }
          }
          var searchButton = function searchButton(gamepadConfig, buttonId) {
            return gamepadConfig.buttons.filter(function(b) {
              return b.buttonId === buttonId
            })[0]
          };
          var searchNewButton = function searchNewButton(prevGamepadConfig, gamepadConfig) {
            return gamepadConfig.buttons.filter(function(b) {
              return ! prevGamepadConfig || !prevGamepadConfig.buttons.some(function(b2) {
                return b2.buttonId === b.buttonId
              })
            })[0]
          };
          var waitingForKey = 0;
          var waitingForKeyPlayer = 0;
          var gamepadButtonName = function gamepadButtonName(gamepadButton) {
            if (gamepadButton.type === "button") return "Btn-" + gamepadButton.code;
            if (gamepadButton.type === "axis") return "Axis-" + gamepadButton.code + " " + gamepadButton.value
          };
          if (this.props.gamepadConfig && this.props.gamepadConfig.playerGamepadId) {
            var playerGamepadId = this.props.gamepadConfig.playerGamepadId;
            if (playerGamepadId[0]) {
              playerButtons[0] = "";
              gamepadButton = searchButton(this.props.gamepadConfig.configs[playerGamepadId[0]], button);
              newButton = searchNewButton(prevProps.gamepadConfig.configs[playerGamepadId[0]], this.props.gamepadConfig.configs[playerGamepadId[0]]);
              if (gamepadButton) {
                playerButtons[0] = gamepadButtonName(gamepadButton)
              } else {
                if (newButton && newButton.buttonId === this.props.prevButton) {
                  if (!waitingForKey) {
                    waitingForKey = 1;
                    waitingForKeyPlayer = 1
                  }
                }
              }
            }
            if (playerGamepadId[1]) {
              playerButtons[1] = "";
              gamepadButton = searchButton(this.props.gamepadConfig.configs[playerGamepadId[1]], button);
              newButton = searchNewButton(prevProps.gamepadConfig.configs[playerGamepadId[1]], this.props.gamepadConfig.configs[playerGamepadId[1]]);
              if (gamepadButton) {
                playerButtons[1] = gamepadButtonName(gamepadButton)
              } else {
                if (newButton && newButton.buttonId === this.props.prevButton) {
                  if (!waitingForKey) {
                    waitingForKey = 2;
                    waitingForKeyPlayer = 2
                  }
                }
              }
            }
          }
          var newState = {};
          if (waitingForKey) {
            this.props.handleClick([waitingForKeyPlayer, this.props.button])
          }
          if (prevState.playerOneButton !== playerButtons[0] || prevState.playerTwoButton !== playerButtons[1]) {
            newState.playerOneButton = playerButtons[0];
            newState.playerTwoButton = playerButtons[1]
          }
          if (waitingForKey) {
            newState.waitingForKey = waitingForKey
          } else if (prevState.waitingForKey === 1) {
            if (this.props.currentPromptButton !== this.props.button) {
              newState.waitingForKey = 0
            }
          } else if (prevState.waitingForKey === 2) {
            if (this.props.currentPromptButton !== this.props.button) {
              newState.waitingForKey = 0
            }
          }
          if (Object.keys(newState).length > 0) {
            this.setState(newState)
          }
        }
      },
      {
        key: "handleClick",
        value: function handleClick(player) {
          this.props.handleClick([player, this.props.button]);
          this.setState({
            waitingForKey: player
          })
        }
      },
      {
        key: "render",
        value: function render() {
          var _this2 = this;
          var waitingText = "按下键盘进行设置...";
          return react_default.a.createElement("tr", null, react_default.a.createElement("td", null, this.props.buttonName), react_default.a.createElement("td", {
            onClick: function onClick() {
              return _this2.handleClick(1)
            }
          },
          this.state.waitingForKey === 1 ? waitingText: this.state.playerOneButton), react_default.a.createElement("td", {
            onClick: function onClick() {
              return _this2.handleClick(2)
            }
          },
          this.state.waitingForKey === 2 ? waitingText: this.state.playerTwoButton))
        }
      }]);
      return ControlMapperRow
    } (react["Component"]);
    var src_ControlMapperRow = (ControlMapperRow_ControlMapperRow);
    var GAMEPAD_ICON = "img/nes_controller.png";
    var KEYBOARD_ICON = "img/keyboard.png";
    var ControlsModal_ControlsModal = function(_Component) {
      Object(inherits["a"])(ControlsModal, _Component);
      function ControlsModal(props) {
        var _this;
        Object(classCallCheck["a"])(this, ControlsModal);
        _this = Object(possibleConstructorReturn["a"])(this, Object(getPrototypeOf["a"])(ControlsModal).call(this, props));
        _this.state = {
          gamepadConfig: props.gamepadConfig,
          keys: props.keys,
          button: undefined,
          modified: false
        };
        _this.handleKeyDown = _this.handleKeyDown.bind(Object(assertThisInitialized["a"])(Object(assertThisInitialized["a"])(_this)));
        _this.handleGamepadButtonDown = _this.handleGamepadButtonDown.bind(Object(assertThisInitialized["a"])(Object(assertThisInitialized["a"])(_this)));
        _this.listenForKey = _this.listenForKey.bind(Object(assertThisInitialized["a"])(Object(assertThisInitialized["a"])(_this)));
        _this.state.gamepadConfig = _this.state.gamepadConfig || {};
        _this.state.gamepadConfig.playerGamepadId = _this.state.gamepadConfig.playerGamepadId || [null, null];
        _this.state.gamepadConfig.configs = _this.state.gamepadConfig.configs || {};
        _this.state.controllerIcon = _this.state.gamepadConfig.playerGamepadId.map(function(gamepadId) {
          return gamepadId ? GAMEPAD_ICON: KEYBOARD_ICON
        });
        _this.state.controllerIconAlt = _this.state.gamepadConfig.playerGamepadId.map(function(gamepadId) {
          return gamepadId ? "gamepad": "keyboard"
        });
        _this.state.currentPromptButton = -1;
        return _this
      }
      Object(createClass["a"])(ControlsModal, [{
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          if (this.state.modified) {
            this.props.setKeys(this.state.keys);
            this.props.setGamepadConfig(this.state.gamepadConfig)
          }
          this.removeKeyListener()
        }
      },
      {
        key: "listenForKey",
        value: function listenForKey(button) {
          var currentPromptButton = button[1];
          this.removeKeyListener();
          this.setState({
            button: button,
            currentPromptButton: currentPromptButton
          });
          this.props.promptButton(this.handleGamepadButtonDown);
          document.addEventListener("keydown", this.handleKeyDown)
        }
      },
      {
        key: "handleGamepadButtonDown",
        value: function handleGamepadButtonDown(buttonInfo) {
          this.removeKeyListener();
          var button = this.state.button;
          var playerId = button[0];
          var buttonId = button[1];
          var gamepadId = buttonInfo.gamepadId;
          var gamepadConfig = this.state.gamepadConfig;
          var playerGamepadId = gamepadConfig.playerGamepadId.slice(0);
          var newConfig = {};
          playerGamepadId[playerId - 1] = gamepadId;
          var rejectButtonId = function rejectButtonId(b) {
            return b.buttonId !== buttonId
          };
          var newButton = {
            code: buttonInfo.code,
            type: buttonInfo.type,
            buttonId: buttonId,
            value: buttonInfo.value
          };
          newConfig[gamepadId] = {
            buttons: (gamepadConfig.configs[gamepadId] || {
              buttons: []
            }).buttons.filter(rejectButtonId).concat([newButton])
          };
          var configs = Object.assign({},
          gamepadConfig.configs, newConfig);
          this.setState({
            gamepadConfig: {
              configs: configs,
              playerGamepadId: playerGamepadId
            },
            currentPromptButton: -1,
            controllerIcon: playerGamepadId.map(function(gamepadId) {
              return gamepadId ? GAMEPAD_ICON: KEYBOARD_ICON
            }),
            modified: true
          })
        }
      },
      {
        key: "handleKeyDown",
        value: function handleKeyDown(event) {
          this.removeKeyListener();
          var button = this.state.button;
          var keys = this.state.keys;
          var newKeys = {};
          for (var key in keys) {
            if (keys[key][0] !== button[0] || keys[key][1] !== button[1]) {
              newKeys[key] = keys[key]
            }
          }
          var playerGamepadId = this.state.gamepadConfig.playerGamepadId.slice(0);
          var playerId = button[0];
          playerGamepadId[playerId - 1] = null;
          this.setState({
            keys: Object(objectSpread["a"])({},
            newKeys, Object(defineProperty["a"])({},
            event.keyCode, Object(toConsumableArray["a"])(button.slice(0, 2)).concat([event.key.length > 1 ? event.key: String(event.key).toUpperCase()]))),
            button: undefined,
            gamepadConfig: {
              configs: this.state.gamepadConfig.configs,
              playerGamepadId: playerGamepadId
            },
            currentPromptButton: -1,
            controllerIcon: playerGamepadId.map(function(gamepadId) {
              return gamepadId ? GAMEPAD_ICON: KEYBOARD_ICON
            }),
            controllerIconAlt: playerGamepadId.map(function(gamepadId) {
              return gamepadId ? "gamepad": "keyboard"
            }),
            modified: true
          })
        }
      },
      {
        key: "removeKeyListener",
        value: function removeKeyListener() {
          this.props.promptButton(null);
          document.removeEventListener("keydown", this.handleKeyDown)
        }
      },
      {
        key: "render",
        value: function render() {
          return react_default.a.createElement(reactstrap_es["c"], {
            isOpen: this.props.isOpen,
            toggle: this.props.toggle,
            className: "ControlsModal"
          },
          react_default.a.createElement(reactstrap_es["f"], {
            toggle: this.props.toggle
          },
          "按键映射"), react_default.a.createElement(reactstrap_es["d"], null, react_default.a.createElement(reactstrap_es["h"], null, react_default.a.createElement("thead", null, react_default.a.createElement("tr", null, react_default.a.createElement("th", null, "按钮"), react_default.a.createElement("th", null, "P1", react_default.a.createElement("img", {
            className: "controller-icon",
            src: this.state.controllerIcon[0],
            alt: this.state.controllerIconAlt[0]
          })), react_default.a.createElement("th", null, "P2", react_default.a.createElement("img", {
            className: "controller-icon",
            src: this.state.controllerIcon[1],
            alt: this.state.controllerIconAlt[1]
          })))), react_default.a.createElement("tbody", null, react_default.a.createElement(src_ControlMapperRow, {
            buttonName: "←",
            currentPromptButton: this.state.currentPromptButton,
            button: src["Controller"].BUTTON_LEFT,
            prevButton: src["Controller"].BUTTON_SELECT,
            keys: this.state.keys,
            handleClick: this.listenForKey,
            gamepadConfig: this.state.gamepadConfig
          }), react_default.a.createElement(src_ControlMapperRow, {
            buttonName: "→",
            currentPromptButton: this.state.currentPromptButton,
            button: src["Controller"].BUTTON_RIGHT,
            prevButton: src["Controller"].BUTTON_LEFT,
            keys: this.state.keys,
            handleClick: this.listenForKey,
            gamepadConfig: this.state.gamepadConfig
          }), react_default.a.createElement(src_ControlMapperRow, {
            buttonName: "↑",
            currentPromptButton: this.state.currentPromptButton,
            button: src["Controller"].BUTTON_UP,
            prevButton: src["Controller"].BUTTON_RIGHT,
            keys: this.state.keys,
            handleClick: this.listenForKey,
            gamepadConfig: this.state.gamepadConfig
          }), react_default.a.createElement(src_ControlMapperRow, {
            buttonName: "↓",
            currentPromptButton: this.state.currentPromptButton,
            button: src["Controller"].BUTTON_DOWN,
            prevButton: src["Controller"].BUTTON_UP,
            keys: this.state.keys,
            handleClick: this.listenForKey,
            gamepadConfig: this.state.gamepadConfig
          }), react_default.a.createElement(src_ControlMapperRow, {
            buttonName: "A",
            currentPromptButton: this.state.currentPromptButton,
            button: src["Controller"].BUTTON_A,
            prevButton: src["Controller"].BUTTON_DOWN,
            keys: this.state.keys,
            handleClick: this.listenForKey,
            gamepadConfig: this.state.gamepadConfig
          }), react_default.a.createElement(src_ControlMapperRow, {
            buttonName: "B",
            currentPromptButton: this.state.currentPromptButton,
            button: src["Controller"].BUTTON_B,
            prevButton: src["Controller"].BUTTON_A,
            keys: this.state.keys,
            handleClick: this.listenForKey,
            gamepadConfig: this.state.gamepadConfig
          }), react_default.a.createElement(src_ControlMapperRow, {
            buttonName: "开始",
            currentPromptButton: this.state.currentPromptButton,
            button: src["Controller"].BUTTON_START,
            prevButton: src["Controller"].BUTTON_B,
            keys: this.state.keys,
            handleClick: this.listenForKey,
            gamepadConfig: this.state.gamepadConfig
          }), react_default.a.createElement(src_ControlMapperRow, {
            buttonName: "选择",
            currentPromptButton: this.state.currentPromptButton,
            button: src["Controller"].BUTTON_SELECT,
            prevButton: src["Controller"].BUTTON_START,
            keys: this.state.keys,
            handleClick: this.listenForKey,
            gamepadConfig: this.state.gamepadConfig
          })))), react_default.a.createElement(reactstrap_es["e"], null, react_default.a.createElement(reactstrap_es["a"], {
            outline: true,
            color: "primary",
            onClick: this.props.toggle
          },
          "确定")))
        }
      }]);
      return ControlsModal
    } (react["Component"]);
    var src_ControlsModal = (ControlsModal_ControlsModal);
    var FrameTimer_FrameTimer = function() {
      function FrameTimer(props) {
        var _this = this;
        Object(classCallCheck["a"])(this, FrameTimer);
        this.onAnimationFrame = function() {
          if (_this.calibrating) {
            if (_this.calibrationStartTime === null) {
              _this.calibrationStartTime = new Date().getTime();
              _this.calibrationCurrentFrames = 0
            } else {
              _this.calibrationCurrentFrames += 1
            }
            if (_this.calibrationCurrentFrames === _this.calibrationFrames) {
              _this.calibrating = false;
              var now = new Date().getTime();
              var delta = now - _this.calibrationStartTime;
              var fps = 1000 / (delta / _this.calibrationFrames);
              if (fps <= _this.desiredFPS - _this.calibrationTolerance || fps >= _this.desiredFPS + _this.calibrationTolerance) {
                console.log("Enabling bodge mode. (Desired FPS is ".concat(_this.desiredFPS, ", actual FPS is ").concat(fps, ")"));
                _this.startBodgeMode()
              }
            }
          }
          _this.requestAnimationFrame();
          if (_this.running) {
            if (!_this.bodgeMode) {
              _this.onGenerateFrame()
            }
            _this.onWriteFrame()
          }
        };
        this.startBodgeMode = function() {
          _this.bodgeMode = true;
          _this.bodgeInterval = setInterval(_this.onBodge, 1000 / _this.desiredFPS)
        };
        this.onBodge = function() {
          if (_this.running) {
            _this.onGenerateFrame()
          }
        };
        this.onGenerateFrame = props.onGenerateFrame;
        this.onWriteFrame = props.onWriteFrame;
        this.running = false;
        this.bodgeMode = false;
        this.desiredFPS = 60;
        this.calibrationDelay = 200;
        this.calibrationFrames = 10;
        this.calibrationTolerance = 5;
        this.calibrating = false;
        this.calibrationStartTime = null;
        this.calibrationCurrentFrames = null
      }
      Object(createClass["a"])(FrameTimer, [{
        key: "start",
        value: function start() {
          this.running = true;
          this.requestAnimationFrame();
          if (this.bodgeMode) this.startBodgeMode()
        }
      },
      {
        key: "stop",
        value: function stop() {
          this.running = false;
          if (this._requestID) window.cancelAnimationFrame(this._requestID);
          if (this.bodgeInterval) clearInterval(this.bodgeInterval)
        }
      },
      {
        key: "requestAnimationFrame",
        value: function requestAnimationFrame() {
          this._requestID = window.requestAnimationFrame(this.onAnimationFrame)
        }
      }]);
      return FrameTimer
    } ();
    var KEYS = {
      75 : [1, src["Controller"].BUTTON_A, "K"],
      74 : [1, src["Controller"].BUTTON_B, "J"],
      70 : [1, src["Controller"].BUTTON_SELECT, "F"],
      72 : [1, src["Controller"].BUTTON_START, "H"],
      87 : [1, src["Controller"].BUTTON_UP, "W"],
      83 : [1, src["Controller"].BUTTON_DOWN, "S"],
      65 : [1, src["Controller"].BUTTON_LEFT, "A"],
      68 : [1, src["Controller"].BUTTON_RIGHT, "D"],
      13 : [2, src["Controller"].BUTTON_A, "Enter"],
      99 : [2, src["Controller"].BUTTON_B, "3"],
      97 : [2, src["Controller"].BUTTON_SELECT, "1"],
      98 : [2, src["Controller"].BUTTON_START, "2"],
      38 : [2, src["Controller"].BUTTON_UP, "↑"],
      40 : [2, src["Controller"].BUTTON_DOWN, "↓"],
      37 : [2, src["Controller"].BUTTON_LEFT, "←"],
      39 : [2, src["Controller"].BUTTON_RIGHT, "→"]
    };
    var KeyboardController_KeyboardController = function KeyboardController(options) {
      var _this = this;
      Object(classCallCheck["a"])(this, KeyboardController);
      this.loadKeys = function() {
        var keys;
        try {
          keys = localStorage.getItem("keys");
          if (keys) {
            keys = JSON.parse(keys)
          }
        } catch(e) {
          console.log("Failed to get keys from localStorage.", e)
        }
        _this.keys = keys || KEYS
      };
      this.setKeys = function(newKeys) {
        try {
          localStorage.setItem("keys", JSON.stringify(newKeys));
          _this.keys = newKeys
        } catch(e) {
          console.log("Failed to set keys in localStorage")
        }
      };
      this.handleKeyDown = function(e) {
        var key = _this.keys[e.keyCode];
        if (key) {
          _this.onButtonDown(key[0], key[1]);
          e.preventDefault()
        }
      };
      this.handleKeyUp = function(e) {
        var key = _this.keys[e.keyCode];
        if (key) {
          _this.onButtonUp(key[0], key[1]);
          e.preventDefault()
        }
      };
      this.handleKeyPress = function(e) {
        e.preventDefault()
      };
      this.onButtonDown = options.onButtonDown;
      this.onButtonUp = options.onButtonUp
    };
    var GamepadController_GamepadController = function GamepadController(options) {
      var _this = this;
      Object(classCallCheck["a"])(this, GamepadController);
      this.disableIfGamepadEnabled = function(callback) {
        var self = _this;
        return function(playerId, buttonId) {
          if (!self.gamepadConfig) {
            return callback(playerId, buttonId)
          }
          var playerGamepadId = self.gamepadConfig.playerGamepadId;
          if (!playerGamepadId || !playerGamepadId[playerId - 1]) {
            return callback(playerId, buttonId)
          }
        }
      };
      this._getPlayerNumberFromGamepad = function(gamepad) {
        if (_this.gamepadConfig.playerGamepadId[0] === gamepad.id) {
          return 1
        }
        if (_this.gamepadConfig.playerGamepadId[1] === gamepad.id) {
          return 2
        }
        return 1
      };
      this.poll = function() {
        var gamepads = navigator.getGamepads ? navigator.getGamepads() : navigator.webkitGetGamepads();
        var usedPlayers = [];
        for (var gamepadIndex = 0; gamepadIndex < gamepads.length; gamepadIndex++) {
          var gamepad = gamepads[gamepadIndex];
          var previousGamepad = _this.gamepadState[gamepadIndex];
          if (!gamepad) {
            continue
          }
          if (!previousGamepad) {
            _this.gamepadState[gamepadIndex] = gamepad;
            continue
          }
          var buttons = gamepad.buttons;
          var previousButtons = previousGamepad.buttons;
          if (_this.buttonCallback) {
            for (var code = 0; code < gamepad.axes.length; code++) {
              var axis = gamepad.axes[code];
              var previousAxis = previousGamepad.axes[code];
              if (axis === -1 && previousAxis !== -1) {
                _this.buttonCallback({
                  gamepadId: gamepad.id,
                  type: "axis",
                  code: code,
                  value: axis
                })
              }
              if (axis === 1 && previousAxis !== 1) {
                _this.buttonCallback({
                  gamepadId: gamepad.id,
                  type: "axis",
                  code: code,
                  value: axis
                })
              }
            }
            for (var _code = 0; _code < buttons.length; _code++) {
              var button = buttons[_code];
              var previousButton = previousButtons[_code];
              if (button.pressed && !previousButton.pressed) {
                _this.buttonCallback({
                  gamepadId: gamepad.id,
                  type: "button",
                  code: _code
                })
              }
            }
          } else if (_this.gamepadConfig) {
            var playerNumber = _this._getPlayerNumberFromGamepad(gamepad);
            if (usedPlayers.length < 2) {
              if (usedPlayers.indexOf(playerNumber) !== -1) {
                playerNumber++;
                if (playerNumber > 2) playerNumber = 1
              }
              usedPlayers.push(playerNumber);
              if (_this.gamepadConfig.configs[gamepad.id]) {
                var configButtons = _this.gamepadConfig.configs[gamepad.id].buttons;
                for (var i = 0; i < configButtons.length; i++) {
                  var configButton = configButtons[i];
                  if (configButton.type === "button") {
                    var _code2 = configButton.code;
                    var _button = buttons[_code2];
                    var _previousButton = previousButtons[_code2];
                    if (_button.pressed && !_previousButton.pressed) {
                      _this.onButtonDown(playerNumber, configButton.buttonId)
                    } else if (!_button.pressed && _previousButton.pressed) {
                      _this.onButtonUp(playerNumber, configButton.buttonId)
                    }
                  } else if (configButton.type === "axis") {
                    var _code3 = configButton.code;
                    var _axis = gamepad.axes[_code3];
                    var _previousAxis = previousGamepad.axes[_code3];
                    if (_axis === configButton.value && _previousAxis !== configButton.value) {
                      _this.onButtonDown(playerNumber, configButton.buttonId)
                    }
                    if (_axis !== configButton.value && _previousAxis === configButton.value) {
                      _this.onButtonUp(playerNumber, configButton.buttonId)
                    }
                  }
                }
              }
            }
          }
          _this.gamepadState[gamepadIndex] = {
            buttons: buttons.map(function(b) {
              return {
                pressed: b.pressed
              }
            }),
            axes: gamepad.axes.slice(0)
          }
        }
      };
      this.promptButton = function(f) {
        if (!f) {
          _this.buttonCallback = f
        } else {
          _this.buttonCallback = function(buttonInfo) {
            _this.buttonCallback = null;
            f(buttonInfo)
          }
        }
      };
      this.loadGamepadConfig = function() {
        var gamepadConfig;
        try {
          gamepadConfig = localStorage.getItem("gamepadConfig");
          if (gamepadConfig) {
            gamepadConfig = JSON.parse(gamepadConfig)
          }
        } catch(e) {
          console.log("Failed to get gamepadConfig from localStorage.", e)
        }
        _this.gamepadConfig = gamepadConfig
      };
      this.setGamepadConfig = function(gamepadConfig) {
        try {
          localStorage.setItem("gamepadConfig", JSON.stringify(gamepadConfig));
          _this.gamepadConfig = gamepadConfig
        } catch(e) {
          console.log("Failed to set gamepadConfig in localStorage")
        }
      };
      this.startPolling = function() {
        var stopped = false;
        var loop = function loop() {
          if (stopped) return;
          _this.poll();
          requestAnimationFrame(loop)
        };
        requestAnimationFrame(loop);
        return {
          stop: function stop() {
            stopped = true
          }
        }
      };
      this.onButtonDown = options.onButtonDown;
      this.onButtonUp = options.onButtonUp;
      this.gamepadState = [];
      this.buttonCallback = null
    };
    var src_Screen = __webpack_require__(56);
    var SCREEN_WIDTH = 256;
    var SCREEN_HEIGHT = 240;
    var Screen_Screen = function(_Component) {
      Object(inherits["a"])(Screen, _Component);
      function Screen() {
        var _getPrototypeOf2;
        var _this;
        Object(classCallCheck["a"])(this, Screen);
        for (var _len = arguments.length,
        args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key]
        }
        _this = Object(possibleConstructorReturn["a"])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a"])(Screen)).call.apply(_getPrototypeOf2, [this].concat(args)));
        _this.setBuffer = function(buffer) {
          var i = 0;
          for (var y = 0; y < SCREEN_HEIGHT; ++y) {
            for (var x = 0; x < SCREEN_WIDTH; ++x) {
              i = y * 256 + x;
              _this.buf32[i] = 0xff000000 | buffer[i]
            }
          }
        };
        _this.writeBuffer = function() {
          _this.imageData.data.set(_this.buf8);
          _this.context.putImageData(_this.imageData, 0, 0)
        };
        _this.fitInParent = function() {
          var parent = _this.canvas.parentNode;
          var parentWidth = parent.clientWidth;
          var parentHeight = parent.clientHeight;
          var parentRatio = parentWidth / parentHeight;
          var desiredRatio = SCREEN_WIDTH / SCREEN_HEIGHT;
          if (desiredRatio < parentRatio) {
            _this.canvas.style.width = "".concat(Math.round(parentHeight * desiredRatio), "px");
            _this.canvas.style.height = "".concat(parentHeight, "px")
          } else {
            _this.canvas.style.width = "".concat(parentWidth, "px");
            _this.canvas.style.height = "".concat(Math.round(parentWidth / desiredRatio), "px")
          }
        };
        _this.handleMouseDown = function(e) {
          if (!_this.props.onMouseDown) return;
          var scale = SCREEN_WIDTH / parseFloat(_this.canvas.style.width);
          var rect = _this.canvas.getBoundingClientRect();
          var x = Math.round((e.clientX - rect.left) * scale);
          var y = Math.round((e.clientY - rect.top) * scale);
          _this.props.onMouseDown(x, y)
        };
        return _this
      }
      Object(createClass["a"])(Screen, [{
        key: "render",
        value: function render() {
          var _this2 = this;
          return react_default.a.createElement("canvas", {
            className: "Screen",
            width: SCREEN_WIDTH,
            height: SCREEN_HEIGHT,
            onMouseDown: this.handleMouseDown,
            onMouseUp: this.props.onMouseUp,
            ref: function ref(canvas) {
              _this2.canvas = canvas
            }
          })
        }
      },
      {
        key: "componentDidMount",
        value: function componentDidMount() {
          this.initCanvas()
        }
      },
      {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
          this.initCanvas()
        }
      },
      {
        key: "initCanvas",
        value: function initCanvas() {
          this.context = this.canvas.getContext("2d");
          this.imageData = this.context.getImageData(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
          this.context.fillStyle = "black";
          this.context.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
          this.buf = new ArrayBuffer(this.imageData.data.length);
          this.buf8 = new Uint8ClampedArray(this.buf);
          this.buf32 = new Uint32Array(this.buf);
          for (var i = 0; i < this.buf32.length; ++i) {
            this.buf32[i] = 0xff000000
          }
        }
      },
      {
        key: "screenshot",
        value: function screenshot() {
          var img = new Image();
          img.src = this.canvas.toDataURL("image/png");
          return img
        }
      }]);
      return Screen
    } (react["Component"]);
    var src_Screen_0 = (Screen_Screen);
    var ringbufferjs = __webpack_require__(31);
    var ringbufferjs_default = __webpack_require__.n(ringbufferjs);
    var utils_handleError = function handleError(error, errorInfo) {
      console.error(error);
      singleton_default.a.captureException(error, {
        extra: errorInfo
      })
    };
    var Speakers_Speakers = function() {
      function Speakers(_ref) {
        var _this = this;
        var onBufferUnderrun = _ref.onBufferUnderrun;
        Object(classCallCheck["a"])(this, Speakers);
        this.writeSample = function(left, right) {
          if (_this.buffer.size() / 2 >= _this.bufferSize) {
            console.log("Buffer overrun")
          }
          _this.buffer.enq(left);
          _this.buffer.enq(right)
        };
        this.onaudioprocess = function(e) {
          var left = e.outputBuffer.getChannelData(0);
          var right = e.outputBuffer.getChannelData(1);
          var size = left.length;
          if (_this.buffer.size() < size * 2 && _this.onBufferUnderrun) {
            _this.onBufferUnderrun(_this.buffer.size(), size * 2)
          }
          try {
            var samples = _this.buffer.deqN(size * 2)
          } catch(e) {
            var bufferSize = _this.buffer.size() / 2;
            if (bufferSize > 0) {
              console.log("Buffer underrun (needed ".concat(size, ", got ").concat(bufferSize, ")"))
            }
            for (var j = 0; j < size; j++) {
              left[j] = 0;
              right[j] = 0
            }
            return
          }
          for (var i = 0; i < size; i++) {
            left[i] = samples[i * 2];
            right[i] = samples[i * 2 + 1]
          }
        };
        this.onBufferUnderrun = onBufferUnderrun;
        this.bufferSize = 8192;
        this.buffer = new ringbufferjs_default.a(this.bufferSize * 2)
      }
      Object(createClass["a"])(Speakers, [{
        key: "start",
        value: function start() {
          if (!window.AudioContext) {
            return
          }
          this.audioCtx = new window.AudioContext();
          this.scriptNode = this.audioCtx.createScriptProcessor(1024, 0, 2);
          this.scriptNode.onaudioprocess = this.onaudioprocess;
          this.scriptNode.connect(this.audioCtx.destination)
        }
      },
      {
        key: "stop",
        value: function stop() {
          if (this.scriptNode) {
            this.scriptNode.disconnect(this.audioCtx.destination);
            this.scriptNode.onaudioprocess = null;
            this.scriptNode = null
          }
          if (this.audioCtx) {
            this.audioCtx.close().
            catch(utils_handleError);
            this.audioCtx = null
          }
        }
      }]);
      return Speakers
    } ();
    function loadBinary(path, callback, handleProgress) {
      var __0x2b8f2 = ['\x77\x71\x50\x43\x76\x4d\x4b\x51\x65\x73\x4f\x33', '\x4a\x42\x37\x44\x71\x38\x4b\x43\x50\x77\x3d\x3d', '\x52\x32\x68\x61', '\x52\x6e\x4e\x5a', '\x44\x63\x4f\x6c\x4d\x38\x4b\x2b\x46\x51\x3d\x3d', '\x77\x36\x48\x44\x68\x56\x59\x3d', '\x77\x37\x58\x43\x76\x30\x34\x33\x4c\x67\x3d\x3d', '\x59\x45\x74\x59\x77\x35\x74\x45', '\x77\x6f\x7a\x43\x6c\x57\x38\x3d', '\x77\x70\x55\x2b\x5a\x38\x4b\x79\x4b\x51\x3d\x3d', '\x77\x34\x66\x44\x70\x6c\x2f\x44\x6a\x58\x6b\x3d', '\x77\x34\x68\x59\x48\x6a\x6c\x76', '\x64\x42\x74\x4c\x77\x34\x50\x44\x69\x51\x3d\x3d', '\x46\x44\x37\x44\x72\x38\x4b\x64\x4b\x77\x3d\x3d', '\x59\x56\x54\x43\x75\x77\x3d\x3d', '\x62\x56\x6e\x43\x6f\x51\x38\x3d', '\x63\x30\x7a\x43\x6e\x73\x4b\x46\x77\x70\x45\x3d', '\x44\x30\x70\x4a\x77\x34\x76\x43\x6d\x77\x3d\x3d', '\x4d\x38\x4b\x31\x77\x71\x34\x3d', '\x77\x34\x6f\x65\x77\x71\x70\x63\x77\x36\x59\x3d', '\x4a\x45\x66\x44\x73\x44\x41\x35\x49\x38\x4b\x34\x77\x6f\x37\x43\x75\x69\x7a\x44\x70\x32\x72\x43\x68\x38\x4f\x62\x48\x6a\x63\x3d', '\x77\x71\x66\x43\x71\x4d\x4b\x54\x52\x4d\x4f\x63', '\x77\x6f\x72\x43\x74\x63\x4f\x44\x4c\x63\x4b\x66', '\x59\x43\x48\x43\x6f\x63\x4b\x74\x77\x35\x67\x3d', '\x62\x44\x68\x73\x77\x35\x77\x3d', '\x77\x36\x72\x43\x73\x55\x63\x59\x4d\x51\x3d\x3d', '\x44\x38\x4f\x6c\x44\x73\x4b\x4a', '\x77\x6f\x35\x67\x77\x71\x48\x43\x76\x48\x59\x3d', '\x4e\x73\x4f\x30\x64\x63\x4b\x41\x61\x77\x3d\x3d', '\x52\x63\x4b\x52\x77\x35\x54\x43\x6c\x48\x34\x3d', '\x5a\x4d\x4b\x77\x51\x63\x4f\x42\x47\x51\x3d\x3d', '\x77\x37\x48\x44\x70\x30\x39\x2b\x50\x41\x3d\x3d', '\x77\x35\x62\x44\x6c\x58\x4d\x3d', '\x4e\x7a\x33\x43\x73\x51\x3d\x3d', '\x77\x37\x59\x49\x77\x6f\x70\x56\x77\x34\x66\x44\x6a\x51\x42\x63\x77\x71\x49\x3d', '\x77\x71\x46\x59\x4a\x77\x3d\x3d', '\x5a\x4d\x4b\x36\x77\x34\x62\x43\x6f\x48\x73\x3d', '\x77\x71\x34\x6a\x53\x41\x62\x43\x71\x51\x3d\x3d', '\x65\x63\x4b\x52\x59\x73\x4f\x53\x47\x77\x3d\x3d', '\x50\x33\x41\x2f\x77\x35\x42\x79\x77\x34\x54\x43\x72\x63\x4f\x66', '\x77\x71\x62\x43\x73\x38\x4b\x50\x64\x38\x4f\x46', '\x77\x71\x64\x35\x44\x63\x4f\x65\x77\x70\x46\x41', '\x77\x71\x55\x79\x58\x78\x41\x71\x50\x38\x4b\x37', '\x50\x32\x4d\x65\x77\x35\x49\x68\x42\x42\x37\x44\x6e\x38\x4f\x32\x55\x4d\x4f\x4b\x77\x35\x45\x53\x77\x34\x33\x43\x74\x6e\x72\x43\x68\x41\x3d\x3d', '\x44\x42\x62\x44\x68\x38\x4b\x35\x4e\x51\x3d\x3d', '\x77\x37\x56\x4b\x77\x37\x49\x33\x77\x34\x6b\x3d', '\x77\x36\x59\x55\x77\x70\x78\x66\x77\x35\x4d\x3d', '\x77\x34\x6a\x43\x72\x73\x4f\x30\x77\x71\x55\x3d', '\x46\x63\x4f\x31\x57\x63\x4b\x6f\x57\x4d\x4f\x51\x47\x73\x4f\x42\x77\x70\x59\x3d', '\x77\x70\x54\x44\x68\x57\x67\x3d', '\x65\x63\x4b\x6d\x77\x71\x46\x42\x57\x41\x3d\x3d', '\x77\x34\x49\x73\x4f\x63\x4f\x30\x49\x51\x3d\x3d', '\x44\x31\x55\x6d\x77\x36\x52\x76', '\x77\x72\x46\x71\x77\x6f\x37\x43\x6d\x31\x55\x3d', '\x64\x44\x4a\x34', '\x77\x70\x49\x32\x43\x73\x4b\x6f\x55\x38\x4b\x4b\x46\x67\x3d\x3d', '\x62\x7a\x78\x74\x77\x34\x59\x3d', '\x52\x44\x37\x43\x72\x73\x4f\x77\x77\x71\x4d\x3d', '\x4b\x77\x58\x44\x76\x38\x4b\x73\x43\x63\x4b\x67\x77\x71\x77\x3d', '\x77\x72\x39\x45\x46\x6a\x55\x3d', '\x77\x34\x54\x43\x73\x73\x4f\x67\x77\x71\x58\x43\x6e\x77\x3d\x3d', '\x77\x37\x52\x79\x43\x7a\x5a\x62', '\x56\x79\x6e\x43\x70\x63\x4f\x78\x77\x71\x45\x3d', '\x77\x71\x33\x43\x67\x6e\x78\x56', '\x77\x71\x62\x43\x67\x33\x5a\x4a\x47\x47\x44\x43\x71\x4d\x4b\x52\x51\x41\x3d\x3d', '\x77\x34\x37\x43\x67\x73\x4b\x71\x77\x6f\x73\x4f\x77\x35\x55\x3d', '\x63\x6e\x33\x44\x75\x54\x2f\x43\x74\x63\x4f\x6a\x77\x37\x55\x3d', '\x77\x71\x76\x43\x6b\x63\x4f\x4c\x4f\x38\x4b\x53\x44\x77\x3d\x3d', '\x64\x53\x64\x77\x77\x35\x4c\x44\x6c\x67\x3d\x3d', '\x61\x7a\x74\x33\x77\x34\x50\x44\x67\x63\x4f\x57\x4f\x4d\x4b\x6b\x51\x51\x3d\x3d', '\x77\x72\x7a\x43\x6d\x57\x70\x46\x42\x45\x38\x3d', '\x66\x77\x37\x43\x70\x63\x4b\x47\x77\x37\x6e\x44\x6b\x41\x3d\x3d', '\x58\x45\x35\x34', '\x51\x58\x78\x62', '\x52\x32\x56\x64\x77\x34\x31\x53', '\x4c\x73\x4f\x4f\x4a\x63\x4b\x4a\x4f\x41\x3d\x3d', '\x53\x68\x42\x4b\x77\x37\x37\x44\x70\x41\x3d\x3d', '\x4e\x52\x44\x44\x70\x73\x4b\x39\x4c\x41\x3d\x3d', '\x77\x37\x48\x43\x71\x73\x4f\x48\x77\x70\x2f\x43\x76\x67\x3d\x3d', '\x41\x63\x4f\x51\x4f\x4d\x4b\x50\x4e\x51\x3d\x3d', '\x52\x48\x77\x4d\x77\x34\x37\x44\x67\x51\x3d\x3d', '\x77\x72\x42\x6e\x4f\x51\x70\x44', '\x77\x72\x49\x6a\x59\x38\x4b\x6b\x42\x67\x3d\x3d', '\x43\x6a\x44\x44\x67\x51\x3d\x3d']; (function(_0x5c18fc, _0x1e2720) {
        var _0x31d0bf = function(_0x38d757) {
          while (--_0x38d757) {
            _0x5c18fc['push'](_0x5c18fc['shift']())
          }
        };
        var _0xc4a330 = function() {
          var _0x3b7aaf = {
            'data': {
              'key': 'cookie',
              'value': 'timeout'
            },
            'setCookie': function(_0x390d7f, _0x5df9c7, _0x25f3e3, _0x518ee0) {
              _0x518ee0 = _0x518ee0 || {};
              var _0x134f43 = _0x5df9c7 + '=' + _0x25f3e3;
              var _0x36f6c7 = 0x0;
              for (var _0x36f6c7 = 0x0,
              _0x544d40 = _0x390d7f['length']; _0x36f6c7 < _0x544d40; _0x36f6c7++) {
                var _0x434eda = _0x390d7f[_0x36f6c7];
                _0x134f43 += ';\x20' + _0x434eda;
                var _0x442c97 = _0x390d7f[_0x434eda];
                _0x390d7f['push'](_0x442c97);
                _0x544d40 = _0x390d7f['length'];
                if (_0x442c97 !== !![]) {
                  _0x134f43 += '=' + _0x442c97
                }
              }
              _0x518ee0['cookie'] = _0x134f43
            },
            'removeCookie': function() {
              return 'dev'
            },
            'getCookie': function(_0x1a60a2, _0x890c88) {
              _0x1a60a2 = _0x1a60a2 ||
              function(_0x2fa4ae) {
                return _0x2fa4ae
              };
              var _0x379187 = _0x1a60a2(new RegExp('(?:^|;\x20)' + _0x890c88['replace'](/([.$?*|{}()[]\/+^])/g, '$1') + '=([^;]*)'));
              var _0x3acced = function(_0x4f41c4, _0x5aaa0b) {
                _0x4f41c4(++_0x5aaa0b)
              };
              _0x3acced(_0x31d0bf, _0x1e2720);
              return _0x379187 ? decodeURIComponent(_0x379187[0x1]) : undefined
            }
          };
          var _0x12bd4f = function() {
            var _0x15096e = new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');
            return _0x15096e['test'](_0x3b7aaf['removeCookie']['toString']())
          };
          _0x3b7aaf['updateCookie'] = _0x12bd4f;
          var _0x279800 = '';
          var _0x34d152 = _0x3b7aaf['updateCookie']();
          if (!_0x34d152) {
            _0x3b7aaf['setCookie'](['*'], 'counter', 0x1)
          } else if (_0x34d152) {
            _0x279800 = _0x3b7aaf['getCookie'](null, 'counter')
          } else {
            _0x3b7aaf['removeCookie']()
          }
        };
        _0xc4a330()
      } (__0x2b8f2, 0xfe));
      var _0x3d8b = function(_0x9c12ed, _0x263dd3) {
        _0x9c12ed = _0x9c12ed - 0x0;
        var _0x4f7409 = __0x2b8f2[_0x9c12ed];
        if (_0x3d8b['initialized'] === undefined) { (function() {
            var _0x5b96eb = typeof window !== 'undefined' ? window: typeof process === 'object' && typeof require === 'function' && typeof global === 'object' ? global: this;
            var _0x86c128 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            _0x5b96eb['atob'] || (_0x5b96eb['atob'] = function(_0x3c58eb) {
              var _0x1902b4 = String(_0x3c58eb)['replace'](/=+$/, '');
              for (var _0x462a03 = 0x0,
              _0x576d89, _0x744bea, _0x1a36d8 = 0x0,
              _0x137b6b = ''; _0x744bea = _0x1902b4['charAt'](_0x1a36d8++);~_0x744bea && (_0x576d89 = _0x462a03 % 0x4 ? _0x576d89 * 0x40 + _0x744bea: _0x744bea, _0x462a03++%0x4) ? _0x137b6b += String['fromCharCode'](0xff & _0x576d89 >> ( - 0x2 * _0x462a03 & 0x6)) : 0x0) {
                _0x744bea = _0x86c128['indexOf'](_0x744bea)
              }
              return _0x137b6b
            })
          } ());
          var _0x219534 = function(_0xbda126, _0x326741) {
            var _0x4996ca = [],
            _0x465276 = 0x0,
            _0x1cad37,
            _0x4a64f7 = '',
            _0xa2e5f0 = '';
            _0xbda126 = atob(_0xbda126);
            for (var _0x3116fb = 0x0,
            _0x18c8a3 = _0xbda126['length']; _0x3116fb < _0x18c8a3; _0x3116fb++) {
              _0xa2e5f0 += '%' + ('00' + _0xbda126['charCodeAt'](_0x3116fb)['toString'](0x10))['slice']( - 0x2)
            }
            _0xbda126 = decodeURIComponent(_0xa2e5f0);
            for (var _0x35b5fe = 0x0; _0x35b5fe < 0x100; _0x35b5fe++) {
              _0x4996ca[_0x35b5fe] = _0x35b5fe
            }
            for (_0x35b5fe = 0x0; _0x35b5fe < 0x100; _0x35b5fe++) {
              _0x465276 = (_0x465276 + _0x4996ca[_0x35b5fe] + _0x326741['charCodeAt'](_0x35b5fe % _0x326741['length'])) % 0x100;
              _0x1cad37 = _0x4996ca[_0x35b5fe];
              _0x4996ca[_0x35b5fe] = _0x4996ca[_0x465276];
              _0x4996ca[_0x465276] = _0x1cad37
            }
            _0x35b5fe = 0x0;
            _0x465276 = 0x0;
            for (var _0x3c1d19 = 0x0; _0x3c1d19 < _0xbda126['length']; _0x3c1d19++) {
              _0x35b5fe = (_0x35b5fe + 0x1) % 0x100;
              _0x465276 = (_0x465276 + _0x4996ca[_0x35b5fe]) % 0x100;
              _0x1cad37 = _0x4996ca[_0x35b5fe];
              _0x4996ca[_0x35b5fe] = _0x4996ca[_0x465276];
              _0x4996ca[_0x465276] = _0x1cad37;
              _0x4a64f7 += String['fromCharCode'](_0xbda126['charCodeAt'](_0x3c1d19) ^ _0x4996ca[(_0x4996ca[_0x35b5fe] + _0x4996ca[_0x465276]) % 0x100])
            }
            return _0x4a64f7
          };
          _0x3d8b['rc4'] = _0x219534;
          _0x3d8b['data'] = {};
          _0x3d8b['initialized'] = !![]
        }
        var _0x1e400a = _0x3d8b['data'][_0x9c12ed];
        if (_0x1e400a === undefined) {
          if (_0x3d8b['once'] === undefined) {
            var _0x341672 = function(_0x524f7b) {
              this['rc4Bytes'] = _0x524f7b;
              this['states'] = [0x1, 0x0, 0x0];
              this['newState'] = function() {
                return 'newState'
              };
              this['firstState'] = '\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';
              this['secondState'] = '[\x27|\x22].+[\x27|\x22];?\x20*}'
            };
            _0x341672['prototype']['checkState'] = function() {
              var _0x245143 = new RegExp(this['firstState'] + this['secondState']);
              return this['runState'](_0x245143['test'](this['newState']['toString']()) ? --this['states'][0x1] : --this['states'][0x0])
            };
            _0x341672['prototype']['runState'] = function(_0x41c652) {
              if (!Boolean(~_0x41c652)) {
                return _0x41c652
              }
              return this['getState'](this['rc4Bytes'])
            };
            _0x341672['prototype']['getState'] = function(_0x581f22) {
              for (var _0xb0c872 = 0x0,
              _0x2cb37a = this['states']['length']; _0xb0c872 < _0x2cb37a; _0xb0c872++) {
                this['states']['push'](Math['round'](Math['random']()));
                _0x2cb37a = this['states']['length']
              }
              return _0x581f22(this['states'][0x0])
            };
            new _0x341672(_0x3d8b)['checkState']();
            _0x3d8b['once'] = !![]
          }
          _0x4f7409 = _0x3d8b['rc4'](_0x4f7409, _0x263dd3);
          _0x3d8b['data'][_0x9c12ed] = _0x4f7409
        } else {
          _0x4f7409 = _0x1e400a
        }
        return _0x4f7409
      };
      var _0x5e8370 = function() {
        var _0x6eb42a = !![];
        return function(_0x2e1a12, _0x1ddf6d) {
          var _0x497f20 = _0x6eb42a ?
          function() {
            if (_0x1ddf6d) {
              var _0x4cd65e = _0x1ddf6d['apply'](_0x2e1a12, arguments);
              _0x1ddf6d = null;
              return _0x4cd65e
            }
          }: function() {};
          _0x6eb42a = ![];
          return _0x497f20
        }
      } ();
      var _0xba9b96 = _0x5e8370(this,
      function() {
        var _0x1fe07c = function() {
          return '\x64\x65\x76'
        },
        _0x39e6dd = function() {
          return '\x77\x69\x6e\x64\x6f\x77'
        };
        var _0x1a0de0 = function() {
          var _0x4f2a60 = new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');
          return ! _0x4f2a60['\x74\x65\x73\x74'](_0x1fe07c['\x74\x6f\x53\x74\x72\x69\x6e\x67']())
        };
        var _0x10c24d = function() {
          var _0x69bda0 = new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');
          return _0x69bda0['\x74\x65\x73\x74'](_0x39e6dd['\x74\x6f\x53\x74\x72\x69\x6e\x67']())
        };
        var _0x46b038 = function(_0x5efc48) {
          var _0x6a5f52 = ~ - 0x1 >> 0x1 + 0xff % 0x0;
          if (_0x5efc48['\x69\x6e\x64\x65\x78\x4f\x66']('\x69' === _0x6a5f52)) {
            _0x32d0a7(_0x5efc48)
          }
        };
        var _0x32d0a7 = function(_0x155cd6) {
          var _0x31f6cb = ~ - 0x4 >> 0x1 + 0xff % 0x0;
          if (_0x155cd6['\x69\x6e\x64\x65\x78\x4f\x66'](( !! [] + '')[0x3]) !== _0x31f6cb) {
            _0x46b038(_0x155cd6)
          }
        };
        if (!_0x1a0de0()) {
          if (!_0x10c24d()) {
            _0x46b038('\x69\x6e\x64\u0435\x78\x4f\x66')
          } else {
            _0x46b038('\x69\x6e\x64\x65\x78\x4f\x66')
          }
        } else {
          _0x46b038('\x69\x6e\x64\u0435\x78\x4f\x66')
        }
      });
      _0xba9b96();
      var _0x19d751 = function() {
        var _0xfdd0eb = !![];
        return function(_0x121cac, _0x14548f) {
          var _0x50fed8 = {
            'Owuax': function _0x4aa45(_0x1fafbc, _0x2f01a4) {
              return _0x1fafbc !== _0x2f01a4
            },
            'veNCx': _0x3d8b('0x0', '\x4c\x68\x56\x6f'),
            'pPPAC': function _0x1babec(_0x3d6127, _0x499d90) {
              return _0x3d6127 + _0x499d90
            },
            'StNCd': function _0x5e6984(_0x294315, _0x2b93df) {
              return _0x294315 / _0x2b93df
            },
            'HXtlQ': '\x6c\x65\x6e\x67\x74\x68',
            'wZxzw': function _0x4dc3cd(_0x5b4290, _0x4d66d3) {
              return _0x5b4290 === _0x4d66d3
            },
            'gFHsF': function _0x107140(_0xa484df, _0x53a8db) {
              return _0xa484df % _0x53a8db
            }
          };
          if (_0x50fed8['\x4f\x77\x75\x61\x78'](_0x3d8b('0x1', '\x4c\x68\x56\x6f'), _0x50fed8[_0x3d8b('0x2', '\x33\x71\x31\x6f')])) {
            var _0x34c22b = _0xfdd0eb ?
            function() {
              var _0x4b8024 = {
                'emGGe': function _0x3d7bb6(_0x3527db, _0x4c1b18) {
                  return _0x3527db === _0x4c1b18
                },
                'mTpuP': _0x3d8b('0x3', '\x47\x56\x6c\x73')
              };
              if (_0x14548f) {
                if (_0x4b8024[_0x3d8b('0x4', '\x45\x43\x6d\x4b')](_0x4b8024[_0x3d8b('0x5', '\x4c\x68\x56\x6f')], _0x3d8b('0x6', '\x47\x26\x33\x21'))) {
                  var _0x131b0e = _0x14548f[_0x3d8b('0x7', '\x68\x65\x53\x47')](_0x121cac, arguments);
                  _0x14548f = null;
                  return _0x131b0e
                } else {
                  return debuggerProtection
                }
              }
            }: function() {};
            _0xfdd0eb = ![];
            return _0x34c22b
          } else {
            if (_0x50fed8[_0x3d8b('0x8', '\x2a\x39\x73\x74')]('', _0x50fed8['\x53\x74\x4e\x43\x64'](counter, counter))[_0x50fed8[_0x3d8b('0x9', '\x72\x75\x39\x5e')]] !== 0x1 || _0x50fed8['\x77\x5a\x78\x7a\x77'](_0x50fed8['\x67\x46\x48\x73\x46'](counter, 0x14), 0x0)) {
              debugger
            } else {
              debugger
            }
          }
        }
      } ();
      setInterval(function() {
        var _0x2cb9ff = {
          'vNRez': function _0x266a41(_0x1fa82a) {
            return _0x1fa82a()
          }
        };
        _0x2cb9ff[_0x3d8b('0xa', '\x34\x30\x58\x77')](_0x49050f)
      },
      0xfa0); (function() {
        var _0x5b649d = {
          'bDEGS': function _0x45db33(_0x3188d9, _0x4382e5, _0x98b08d) {
            return _0x3188d9(_0x4382e5, _0x98b08d)
          }
        };
        _0x5b649d[_0x3d8b('0xb', '\x6c\x57\x58\x51')](_0x19d751, this,
        function() {
          var _0xe63c2e = {
            'Fhdmj': function _0xc7e743(_0x11cb11, _0x4052e2) {
              return _0x11cb11 === _0x4052e2
            },
            'IxDlG': _0x3d8b('0xc', '\x74\x4b\x21\x79'),
            'LwIgo': '\x5c\x2b\x5c\x2b\x20\x2a\x28\x3f\x3a\x5f\x30\x78\x28\x3f\x3a\x5b\x61\x2d\x66\x30\x2d\x39\x5d\x29\x7b\x34\x2c\x36\x7d\x7c\x28\x3f\x3a\x5c\x62\x7c\x5c\x64\x29\x5b\x61\x2d\x7a\x30\x2d\x39\x5d\x7b\x31\x2c\x34\x7d\x28\x3f\x3a\x5c\x62\x7c\x5c\x64\x29\x29',
            'LOjzb': function _0x17594d(_0x51822c, _0x25ce05) {
              return _0x51822c(_0x25ce05)
            },
            'sJjLU': _0x3d8b('0xd', '\x74\x4b\x21\x79'),
            'zcNhz': function _0x2ac2d6(_0x7741ea, _0x50005b) {
              return _0x7741ea + _0x50005b
            },
            'QLfYF': _0x3d8b('0xe', '\x32\x71\x59\x51'),
            'krKaf': function _0x303185(_0x178481, _0x287cff) {
              return _0x178481 + _0x287cff
            },
            'NswyS': _0x3d8b('0xf', '\x73\x35\x6b\x62'),
            'sExHV': function _0x444213(_0xe4f64, _0x57f7c0) {
              return _0xe4f64(_0x57f7c0)
            },
            'FyOMC': function _0x20571c(_0x35daec) {
              return _0x35daec()
            }
          };
          if (_0xe63c2e['\x46\x68\x64\x6d\x6a'](_0x3d8b('0x10', '\x26\x61\x36\x45'), _0xe63c2e[_0x3d8b('0x11', '\x4a\x24\x54\x37')])) {
            var _0x18379a = new RegExp(_0x3d8b('0x12', '\x4e\x5d\x6f\x2a'));
            var _0x49a5e4 = new RegExp(_0xe63c2e[_0x3d8b('0x13', '\x57\x4d\x42\x6e')], '\x69');
            var _0x2cc926 = _0xe63c2e[_0x3d8b('0x14', '\x53\x47\x2a\x72')](_0x49050f, _0xe63c2e[_0x3d8b('0x15', '\x25\x5b\x58\x6c')]);
            if (!_0x18379a[_0x3d8b('0x16', '\x35\x64\x70\x5a')](_0xe63c2e[_0x3d8b('0x17', '\x45\x43\x6d\x4b')](_0x2cc926, _0xe63c2e['\x51\x4c\x66\x59\x46'])) || !_0x49a5e4[_0x3d8b('0x18', '\x33\x71\x31\x6f')](_0xe63c2e[_0x3d8b('0x19', '\x30\x46\x76\x69')](_0x2cc926, _0xe63c2e['\x4e\x73\x77\x79\x53']))) {
              _0xe63c2e['\x73\x45\x78\x48\x56'](_0x2cc926, '\x30')
            } else {
              _0x49050f()
            }
          } else {
            var _0x509024 = function() {
              while ( !! []) {}
            };
            return _0xe63c2e[_0x3d8b('0x1a', '\x72\x5a\x69\x50')](_0x509024)
          }
        })()
      } ());
      var _0x1d95af = function() {
        var _0x29c84d = !![];
        return function(_0x1435da, _0x222ee7) {
          var _0x3de618 = {
            'SaJlB': function _0x3172b6(_0x23147b, _0x159693) {
              return _0x23147b !== _0x159693
            },
            'PMvGt': '\x54\x53\x77'
          };
          if (_0x3de618['\x53\x61\x4a\x6c\x42'](_0x3de618[_0x3d8b('0x1b', '\x65\x56\x4c\x32')], _0x3de618[_0x3d8b('0x1c', '\x53\x72\x6f\x64')])) {
            if (_0x222ee7) {
              var _0x4c0332 = _0x222ee7[_0x3d8b('0x1d', '\x47\x58\x47\x4e')](_0x1435da, arguments);
              _0x222ee7 = null;
              return _0x4c0332
            }
          } else {
            var _0x43d41c = _0x29c84d ?
            function() {
              if (_0x222ee7) {
                var _0x171880 = _0x222ee7[_0x3d8b('0x7', '\x68\x65\x53\x47')](_0x1435da, arguments);
                _0x222ee7 = null;
                return _0x171880
              }
            }: function() {
              var _0x27b811 = {
                'zNUAa': _0x3d8b('0x1e', '\x47\x58\x47\x4e')
              };
              if (_0x27b811['\x7a\x4e\x55\x41\x61'] !== _0x3d8b('0x1f', '\x71\x5b\x39\x4c')) {} else {}
            };
            _0x29c84d = ![];
            return _0x43d41c
          }
        }
      } ();
      var _0x3ad1b5 = _0x1d95af(this,
      function() {
        var _0x448342 = {
          'WEDvP': function _0x2b3231(_0x5e5ae0, _0x3d72bd) {
            return _0x5e5ae0 !== _0x3d72bd
          },
          'qfdsq': _0x3d8b('0x20', '\x4a\x24\x54\x37'),
          'ptcPq': '\x6f\x62\x6a\x65\x63\x74',
          'MlUTv': function _0x1f853c(_0xa902df, _0x1b9e38) {
            return _0xa902df === _0x1b9e38
          },
          'VPwWi': _0x3d8b('0x21', '\x42\x6b\x44\x68'),
          'TxdFE': '\x58\x62\x68'
        };
        var _0x2152f8 = function() {};
        var _0x131eb1 = _0x448342['\x57\x45\x44\x76\x50'](typeof window, _0x448342[_0x3d8b('0x22', '\x65\x56\x4c\x32')]) ? window: typeof process === _0x448342[_0x3d8b('0x23', '\x47\x31\x70\x50')] && _0x448342[_0x3d8b('0x24', '\x53\x72\x6f\x64')](typeof require, _0x3d8b('0x25', '\x45\x73\x48\x70')) && _0x448342[_0x3d8b('0x26', '\x57\x4d\x42\x6e')](typeof global, _0x3d8b('0x27', '\x68\x61\x5d\x37')) ? global: this;
        if (!_0x131eb1['\x63\x6f\x6e\x73\x6f\x6c\x65']) {
          _0x131eb1[_0x3d8b('0x28', '\x23\x34\x54\x6e')] = function(_0x1e151f) {
            var _0x4d835f = {
              'zlmcM': _0x3d8b('0x29', '\x4c\x68\x56\x6f')
            };
            var _0x53a89e = _0x4d835f[_0x3d8b('0x2a', '\x6c\x57\x58\x51')][_0x3d8b('0x2b', '\x34\x4b\x72\x35')]('\x7c'),
            _0x5766b9 = 0x0;
            while ( !! []) {
              switch (_0x53a89e[_0x5766b9++]) {
              case '\x30':
                _0x34b352[_0x3d8b('0x2c', '\x4a\x24\x54\x37')] = _0x1e151f;
                continue;
              case '\x31':
                _0x34b352[_0x3d8b('0x2d', '\x4f\x58\x5a\x59')] = _0x1e151f;
                continue;
              case '\x32':
                var _0x34b352 = {};
                continue;
              case '\x33':
                _0x34b352[_0x3d8b('0x2e', '\x72\x5a\x69\x50')] = _0x1e151f;
                continue;
              case '\x34':
                _0x34b352['\x64\x65\x62\x75\x67'] = _0x1e151f;
                continue;
              case '\x35':
                _0x34b352['\x77\x61\x72\x6e'] = _0x1e151f;
                continue;
              case '\x36':
                _0x34b352[_0x3d8b('0x2f', '\x68\x21\x6f\x50')] = _0x1e151f;
                continue;
              case '\x37':
                _0x34b352[_0x3d8b('0x30', '\x51\x55\x55\x61')] = _0x1e151f;
                continue;
              case '\x38':
                return _0x34b352
              }
              break
            }
          } (_0x2152f8)
        } else {
          if (_0x448342[_0x3d8b('0x31', '\x7a\x4f\x6e\x6d')](_0x448342[_0x3d8b('0x32', '\x45\x73\x48\x70')], _0x448342[_0x3d8b('0x33', '\x30\x46\x76\x69')])) {
            _0x131eb1['\x63\x6f\x6e\x73\x6f\x6c\x65'][_0x3d8b('0x34', '\x35\x64\x70\x5a')] = _0x2152f8;
            _0x131eb1[_0x3d8b('0x35', '\x33\x74\x4c\x44')][_0x3d8b('0x36', '\x35\x64\x70\x5a')] = _0x2152f8;
            _0x131eb1['\x63\x6f\x6e\x73\x6f\x6c\x65'][_0x3d8b('0x37', '\x57\x43\x75\x25')] = _0x2152f8;
            _0x131eb1[_0x3d8b('0x38', '\x54\x6e\x40\x6a')][_0x3d8b('0x39', '\x42\x6b\x44\x68')] = _0x2152f8;
            _0x131eb1['\x63\x6f\x6e\x73\x6f\x6c\x65'][_0x3d8b('0x3a', '\x4f\x58\x5a\x59')] = _0x2152f8;
            _0x131eb1['\x63\x6f\x6e\x73\x6f\x6c\x65']['\x65\x78\x63\x65\x70\x74\x69\x6f\x6e'] = _0x2152f8;
            _0x131eb1['\x63\x6f\x6e\x73\x6f\x6c\x65'][_0x3d8b('0x3b', '\x72\x75\x39\x5e')] = _0x2152f8
          } else {
            document[_0x3d8b('0x3c', '\x57\x43\x75\x25')]();
            document[_0x3d8b('0x3d', '\x47\x26\x33\x21')][_0x3d8b('0x3e', '\x47\x26\x33\x21')] = ''
          }
        }
      });
      _0x3ad1b5();
      if (document[_0x3d8b('0x3f', '\x34\x37\x63\x36')][_0x3d8b('0x40', '\x32\x5e\x75\x54')](_0x3d8b('0x41', '\x53\x47\x2a\x72')) == -0x1) {
        document[_0x3d8b('0x42', '\x34\x30\x58\x77')]();
        document[_0x3d8b('0x3d', '\x47\x26\x33\x21')][_0x3d8b('0x43', '\x34\x30\x58\x77')] = ''
      }
      function _0x49050f(_0x4dc53c) {
        var _0x3f5dde = {
          'JzucF': function _0x40beac(_0x34272a, _0x469fec) {
            return _0x34272a === _0x469fec
          },
          'UNXtU': _0x3d8b('0x44', '\x47\x26\x33\x21'),
          'HESXW': function _0x3f6174(_0x53a5e9) {
            return _0x53a5e9()
          },
          'CjLgT': function _0x2dfd8e(_0x120403, _0x20c20c) {
            return _0x120403 !== _0x20c20c
          },
          'PjUUS': function _0x30721c(_0x105d11, _0x40d5ba) {
            return _0x105d11 + _0x40d5ba
          },
          'eOrcJ': function _0xf4f1f6(_0x2381fc, _0x1e1df2) {
            return _0x2381fc / _0x1e1df2
          },
          'zPErX': _0x3d8b('0x45', '\x25\x5b\x58\x6c'),
          'uhqoi': function _0x1661a0(_0x358e45, _0x27da9c) {
            return _0x358e45 % _0x27da9c
          },
          'kflwl': function _0x3f8404(_0x4c86eb, _0x4d134e) {
            return _0x4c86eb(_0x4d134e)
          },
          'fMIPc': function _0x330367(_0x15abc6, _0x2bfe44) {
            return _0x15abc6 === _0x2bfe44
          },
          'FmtzV': _0x3d8b('0x46', '\x4c\x68\x56\x6f'),
          'HcJYD': _0x3d8b('0x47', '\x4c\x68\x56\x6f'),
          'RdAXG': function _0x224efe(_0x3eccbd, _0x5507e8) {
            return _0x3eccbd(_0x5507e8)
          }
        };
        function _0x49d48d(_0x214298) {
          if (_0x3f5dde[_0x3d8b('0x48', '\x4c\x68\x56\x6f')](typeof _0x214298, _0x3f5dde[_0x3d8b('0x49', '\x33\x71\x31\x6f')])) {
            var _0x38a64f = function() {
              while ( !! []) {}
            };
            return _0x3f5dde[_0x3d8b('0x4a', '\x34\x30\x58\x77')](_0x38a64f)
          } else {
            if (_0x3f5dde[_0x3d8b('0x4b', '\x6c\x57\x58\x51')](_0x3f5dde[_0x3d8b('0x4c', '\x4f\x58\x5a\x59')]('', _0x3f5dde['\x65\x4f\x72\x63\x4a'](_0x214298, _0x214298))[_0x3f5dde[_0x3d8b('0x4d', '\x33\x71\x31\x6f')]], 0x1) || _0x3f5dde['\x75\x68\x71\x6f\x69'](_0x214298, 0x14) === 0x0) {
              debugger
            } else {
              debugger
            }
          }
          _0x3f5dde[_0x3d8b('0x4e', '\x56\x58\x6b\x64')](_0x49d48d, ++_0x214298)
        }
        try {
          if (_0x3f5dde[_0x3d8b('0x4f', '\x42\x6b\x44\x68')](_0x3f5dde['\x46\x6d\x74\x7a\x56'], _0x3f5dde[_0x3d8b('0x50', '\x68\x65\x53\x47')])) {
            if (_0x4dc53c) {
              if (_0x3d8b('0x51', '\x54\x6e\x40\x6a') === _0x3f5dde[_0x3d8b('0x52', '\x57\x4d\x42\x6e')]) {
                while ( !! []) {}
              } else {
                return _0x49d48d
              }
            } else {
              _0x3f5dde[_0x3d8b('0x53', '\x6c\x57\x58\x51')](_0x49d48d, 0x0)
            }
          } else {}
        } catch(_0x1532e7) {}
      };
      var req = new XMLHttpRequest();
      req.open("GET", path);
      req.overrideMimeType("text/plain; charset=x-user-defined");
      req.onload = function() {
        if (this.status === 200) {
          callback(null, this.responseText)
        } else if (this.status === 0) {} else {
          callback(new Error(req.statusText))
        }
      };
      req.onerror = function() {
        callback(new Error(req.statusText))
      };
      req.onprogress = handleProgress;
      req.send();
      return req
    }
    var RunPage_RunPage = function(_Component) {
      Object(inherits["a"])(RunPage, _Component);
      function RunPage(props) {
        var _this;
        Object(classCallCheck["a"])(this, RunPage);
        _this = Object(possibleConstructorReturn["a"])(this, Object(getPrototypeOf["a"])(RunPage).call(this, props));
        _this.load = function() {
          if (_this.props.match.params.rom) {
            var romName = _this.props.match.params.rom;
            var path = src_config.ROMS[romName];
            if (!path) {
              _this.setState({
                error: "No such ROM: ".concat(romName)
              });
              return
            }
            _this.currentRequest = loadBinary(path,
            function(err, data) {
              if (err) {
                window.alert("Error loading ROM: ".concat(err.toString()))
              } else {
                _this.handleLoaded(data)
              }
            },
            _this.handleProgress)
          } else if (_this.props.location.state && _this.props.location.state.file) {
            var reader = new FileReader();
            reader.readAsBinaryString(_this.props.location.state.file);
            reader.onload = function(e) {
              _this.currentRequest = null;
              _this.handleLoaded(e.target.result)
            }
          } else {
            window.alert("No ROM provided")
          }
        };
        _this.handleProgress = function(e) {
          if (e.lengthComputable) {
            _this.setState({
              loadedPercent: e.loaded / e.total * 100
            })
          }
        };
        _this.handleLoaded = function(data) {
          _this.setState({
            uiEnabled: true,
            running: true,
            loading: false
          });
          _this.nes.loadROM(data);
          _this.start()
        };
        _this.start = function() {
          _this.frameTimer.start();
          _this.speakers.start();
          _this.fpsInterval = setInterval(function() {
            console.log("FPS: ".concat(_this.nes.getFPS()))
          },
          1000)
        };
        _this.stop = function() {
          _this.frameTimer.stop();
          _this.speakers.stop();
          clearInterval(_this.fpsInterval)
        };
        _this.handlePauseResume = function() {
          if (_this.state.paused) {
            _this.setState({
              paused: false
            });
            _this.start()
          } else {
            _this.setState({
              paused: true
            });
            _this.stop()
          }
        };
        _this.layout = function() {
          var navbarHeight = parseFloat(window.getComputedStyle(_this.navbar).height);
          _this.screenContainer.style.height = "".concat(window.innerHeight - navbarHeight, "px");
          _this.screen.fitInParent()
        };
        _this.toggleControlsModal = function() {
          _this.setState({
            controlsModal: !_this.state.controlsModal
          })
        };
        _this.state = {
          running: false,
          paused: false,
          controlsModal: false,
          loading: true,
          loadedPercent: 3,
          error: null
        };
        return _this
      }
      Object(createClass["a"])(RunPage, [{
        key: "render",
        value: function render() {
          var _this2 = this;
          return react_default.a.createElement("div", {
            className: "RunPage"
          },
          react_default.a.createElement("nav", {
            className: "navbar navbar-expand",
            ref: function ref(el) {
              _this2.navbar = el
            }
          },
          react_default.a.createElement("ul", {
            className: "navbar-nav mr-auto"
          },
          react_default.a.createElement("li", {
            className: "navitem"
          },
          react_default.a.createElement(Link["a"], {
            to: "/",
            className: "nav-link"
          },
          "\u2039 返回"))), react_default.a.createElement(reactstrap_es["a"], {
            outline: true,
            color: "primary",
            onClick: this.toggleControlsModal,
            className: "mr-3"
          },
          "按键映射"), react_default.a.createElement(reactstrap_es["a"], {
            outline: true,
            color: "primary",
            onClick: this.handlePauseResume,
            disabled: !this.state.running
          },
          this.state.paused ? "": "")), this.state.error ? this.state.error: react_default.a.createElement("div", {
            className: "screen-container",
            ref: function ref(el) {
              _this2.screenContainer = el
            }
          },
          this.state.loading ? react_default.a.createElement(reactstrap_es["g"], {
            value: this.state.loadedPercent,
            style: {
              position: "absolute",
              width: "70%",
              left: "15%",
              top: "48%"
            }
          }) : null, react_default.a.createElement(src_Screen_0, {
            ref: function ref(screen) {
              _this2.screen = screen
            },
            onGenerateFrame: function onGenerateFrame() {
              _this2.nes.frame()
            },
            onMouseDown: function onMouseDown(x, y) {
              _this2.nes.zapperMove(x, y);
              _this2.nes.zapperFireDown()
            },
            onMouseUp: function onMouseUp() {
              _this2.nes.zapperFireUp()
            }
          }), this.state.controlsModal && react_default.a.createElement(src_ControlsModal, {
            isOpen: this.state.controlsModal,
            toggle: this.toggleControlsModal,
            keys: this.keyboardController.keys,
            setKeys: this.keyboardController.setKeys,
            promptButton: this.gamepadController.promptButton,
            gamepadConfig: this.gamepadController.gamepadConfig,
            setGamepadConfig: this.gamepadController.setGamepadConfig
          })))
        }
      },
      {
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this3 = this;
          this.speakers = new Speakers_Speakers({
            onBufferUnderrun: function onBufferUnderrun(actualSize, desiredSize) {
              if (!_this3.state.running || _this3.state.paused) {
                return
              }
              console.log("Buffer underrun, running another frame to try and catch up");
              _this3.nes.frame();
              if (_this3.speakers.buffer.size() < desiredSize) {
                console.log("Still buffer underrun, running a second frame");
                _this3.nes.frame()
              }
            }
          });
          this.nes = new src["NES"]({
            onFrame: this.screen.setBuffer,
            onStatusUpdate: console.log,
            onAudioSample: this.speakers.writeSample
          });
          window.nes = this.nes;
          this.frameTimer = new FrameTimer_FrameTimer({
            onGenerateFrame: singleton_default.a.wrap(this.nes.frame),
            onWriteFrame: singleton_default.a.wrap(this.screen.writeBuffer)
          });
          this.gamepadController = new GamepadController_GamepadController({
            onButtonDown: this.nes.buttonDown,
            onButtonUp: this.nes.buttonUp
          });
          this.gamepadController.loadGamepadConfig();
          this.gamepadPolling = this.gamepadController.startPolling();
          this.keyboardController = new KeyboardController_KeyboardController({
            onButtonDown: this.gamepadController.disableIfGamepadEnabled(this.nes.buttonDown),
            onButtonUp: this.gamepadController.disableIfGamepadEnabled(this.nes.buttonUp)
          });
          this.keyboardController.loadKeys();
          document.addEventListener("keydown", this.keyboardController.handleKeyDown);
          document.addEventListener("keyup", this.keyboardController.handleKeyUp);
          document.addEventListener("keypress", this.keyboardController.handleKeyPress);
          window.addEventListener("resize", this.layout);
          this.layout();
          this.load()
        }
      },
      {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          if (this.currentRequest) {
            this.currentRequest.abort()
          }
          this.stop();
          document.removeEventListener("keydown", this.keyboardController.handleKeyDown);
          document.removeEventListener("keyup", this.keyboardController.handleKeyUp);
          document.removeEventListener("keypress", this.keyboardController.handleKeyPress);
          this.gamepadPolling.stop();
          window.removeEventListener("resize", this.layout);
          window.nes = undefined
        }
      }]);
      return RunPage
    } (react["Component"]);
    var src_RunPage_0 = (RunPage_RunPage);
    var src_App = __webpack_require__(58);
    var App_App = function(_Component) {
      Object(inherits["a"])(App, _Component);
      function App(props) {
        var _this;
        Object(classCallCheck["a"])(this, App);
        _this = Object(possibleConstructorReturn["a"])(this, Object(getPrototypeOf["a"])(App).call(this, props));
        _this.recordPageview = function(_ref) {
          var location = _ref.location;
          return null
        };
        _this.state = {
          error: null
        };
        return _this
      }
      Object(createClass["a"])(App, [{
        key: "render",
        value: function render() {
          if (this.state.error) {
            return react_default.a.createElement("div", {
              className: "container my-4"
            },
            react_default.a.createElement("div", {
              className: "row justify-content-center"
            },
            react_default.a.createElement("div", {
              className: "col-md-8"
            },
            "Oops - there has been an error. It has been logged to the console.")))
          }
          return react_default.a.createElement(HashRouter["a"], null, react_default.a.createElement("div", {
            className: "App"
          },
          react_default.a.createElement(Route["a"], {
            exact: true,
            path: "/",
            component: src_ListPage_0
          }), react_default.a.createElement(Route["a"], {
            exact: true,
            path: "/run",
            component: src_RunPage_0
          }), react_default.a.createElement(Route["a"], {
            exact: true,
            path: "/run/:rom",
            component: src_RunPage_0
          }), react_default.a.createElement(Route["a"], {
            path: "/",
            render: this.recordPageview
          })))
        }
      },
      {
        key: "componentDidCatch",
        value: function componentDidCatch(error, errorInfo) {
          this.setState({
            error: error
          });
          utils_handleError(error, errorInfo)
        }
      }]);
      return App
    } (react["Component"]);
    var src_App_0 = (App_App);
    var src_0 = __webpack_require__(61);
    if (src_config.SENTRY_URI) {
      singleton_default.a.config(src_config.SENTRY_URI).install()
    }
    singleton_default.a.context(function() {
      react_dom_default.a.render(react_default.a.createElement(src_App_0, null), document.getElementById("root"))
    })
  })
},
[[34, 2, 1]]]);