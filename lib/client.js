// (HTTP: GET, PUT, HEAD, OPTIONS, MKCOL, PROPFIND, PROPPATCH, LOCK, UNLOCK)

var Client = function () {};


/**
 * Get Resource(WebDAV: GET)
 *
 * @param {string} path
 *     Path(<code>/foo/bar.xml</code>, <code>/foo/bar.txt</code>).
 */
Client.prototype.get = function (path, callback) {

};

/**
 * Upload Resource(WebDAV: PUT)
 *
 * @param {string} path
 *     Path(<code>/foo/bar.xml</code>, <code>/foo/bar.txt</code>).
 * @param {Object} data Upload filedata(text OR binary).
 * @param {Function=} onXhrComplete onXhrComplete callback function.
 */
Client.prototype.put = function (path, data, options, callback) {

};

/**
 * Check Resource(WebDAV: HEAD)
 *
 * @param {string} path Path(<code>/foo/</code>, <code>/foo/bar.txt</code>).
 */
Client.prototype.head = function (path, callback) {

};

/**
 * Find out which HTTP methods are understood by the server.(WebDAV: OPTIONS)
 *
 * @param {string} path Path(<code>/foo/</code>, <code>/foo/bar.txt</code>).
 */
Client.prototype.options = function (path, callback) {

};

/**
 * Create Collection(WebDAV: MKCOL)
 *
 * @param {string} path Path(<code>/foo/</code>, <code>/foo/bar/</code>).
 */
Client.prototype.mkcol = function () {};

/**
 * Get Collection list and Resource property(WebDAV: PROPFIND)
 *
 * @param {string} path Path(<code>/foo/</code>, <code>/foo/bar.txt</code>).
 */
Client.prototype.propfind = function (path, callback) {

};

/**
 * Set Collection list and Resource property(WebDAV: PROPPATCH)
 *
 * @param {string} path Path(<code>/foo/</code>, <code>/foo/bar.txt</code>).
 */
Client.prototype.proppatch = function (path, callback) {};

/**
 * Lock resource(WebDAV: LOCK)
 *
 * @param {string} path Path(<code>/foo/</code>, <code>/foo/bar.txt</code>).
 */
Client.prototype.lock = function () {};

/**
 * Lock resource(WebDAV: UNLOCK)
 *
 * @param {string} path Path(<code>/foo/</code>, <code>/foo/bar.txt</code>).
 */
Client.prototype.unlock = function () {};


/**
 * Delete Collection or Resource(WebDAV: DELETE)
 *
 * @param {string} path Path(<code>/foo/</code>, <code>/foo/bar.txt</code>).
 */
Client.prototype.remove = function () {

};

/**
 * Move Collection(WebDAV: MOVE)
 *
 * @see #copyOrMovePath_
 */
Client.prototype.move = function(
  path, dstPath, handler, opt_request, onXhrComplete) {
  this.copyOrMovePath_('MOVE',
    path, dstPath, handler, opt_request, onXhrComplete);
};

/**
 * Copy Collection(WebDAV: COPY)
 *
 * @see #copyOrMovePath_
 */
Client.prototype.copy = function(
  path, dstPath, handler, opt_request, onXhrComplete) {
  this.copyOrMovePath_('COPY',
    path, dstPath, handler, opt_request, onXhrComplete);
};
