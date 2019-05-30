// https://github.com/imakewebthings/waypoints/issues/450#issuecomment-222745554
// https://github.com/imakewebthings/waypoints/issues/450#issuecomment-228154548

Waypoint.Inview.prototype.createWaypoints = function() {
  // same as jQuery.outerHeight() function, works for IE9+
  function outerHeight(el) {
    var height = el.offsetHeight;
    var style = getComputedStyle(el);

    height += parseInt(style.marginTop) + parseInt(style.marginBottom);
    return height;
  }

  var configs = {
    vertical: [{
      down: 'enter',
      up: 'exited',
      offset: function() {
        var _offset = this.options.offset && this.options.offset.bottom || 0;
        return this.options.context.innerHeight - _offset;
      }.bind( this )
    }, {
      down: 'entered',
      up: 'exit',
      offset: function() {
        var _offset = this.options.offset && this.options.offset.bottom || 0;
        return this.options.context.innerHeight - outerHeight(this.element) - _offset;
      }.bind( this )
    }, {
      down: 'exit',
      up: 'entered',
      offset: function() {
        var _offset = this.options.offset && this.options.offset.top || 0;
        return _offset;
      }.bind( this )
    }, {
      down: 'exited',
      up: 'enter',
      offset: function() {
        var _offset = this.options.offset && this.options.offset.top || 0;
        return _offset - outerHeight(this.element);
      }.bind( this )
    }],
    horizontal: [{
      right: 'enter',
      left: 'exited',
      offset: '100%'
    }, {
      right: 'entered',
      left: 'exit',
      offset: 'right-in-view'
    }, {
      right: 'exit',
      left: 'entered',
      offset: 0
    }, {
      right: 'exited',
      left: 'enter',
      offset: function() {
        return -this.adapter.outerWidth()
      }
    }]
  };

  for (var i = 0, end = configs[this.axis].length; i < end; i++) {
    var config = configs[this.axis][i]
    this.createWaypoint(config)
  }
};
