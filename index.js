/**
 * @file mofron-effect-width/index.js
 * @brief width effect for mofron
 * @license MIT
 */
module.exports = class extends mofron.class.Effect {
    /**
     * initialize effect
     * 
     * @param (mixed) 
     *                key-value: effect config
     * @short
     * @type private
     */
    constructor (p1,p2) {
        try {
            super();
            this.modname("Width");
            this.shortForm("fromValue","toValue");
            this.transition("width");
	    this.speed(1000);
            
	    this.confmng().add("fromValue", { type: "size", init: "0rem" });
	    this.confmng().add("toValue", { type: "size", init: "0rem" });
            
            this.beforeEvent(
                (bf_eff) => {
                    try {
                        bf_eff.component().style({ 'width' : bf_eff.fromValue() });
                    } catch (e) {
                        console.error(e.stack);
                        throw e;
                    }
                }
            );
            
            /* init config */
	    if (0 < arguments.length) {
                this.config(p1,p2);
	    }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * effect contents
     * 
     * @type private
     */
    contents (cmp) {
        try {
	    this.component().style({ 'width' : this.toValue() });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    /**
     * start width for animation
     *
     * @param (size) start width
     * @return (size) start width
     * @type parameter
     */
    fromValue (val) {
        try {
            return this.confmng("fromValue", val);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * end width for animation
     *
     * @param (size) end width
     * @return (size) end width
     * @type parameter
     */
    toValue (val) {
        try {
            return this.confmng("toValue", val);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
