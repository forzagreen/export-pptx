

var example1 = new Vue({
  el: '#myapp',
  data: {
    items: [
      { message: 'Foo' },
      { message: 'Bar' },
      { message: 'Sth' },
      { message: 'Odd' }
    ]
  },
  methods: {
  	exportPptx: function() {
  		console.log("Let's generate a pptx !");
  		// Create a new Presentation
		var pptx = new PptxGenJS();

		// Add a Slide, then add objects
		var slide = pptx.addNewSlide();
		slide.addText('Images Example', { x:0.5, y:0.25, font_size:18, font_face:'Arial', color:'0088CC' });

		// Images: Using local images sources (same paths as you would use in an {img src=""} tag)
		slide.addImage({ path:'img/logo_square.png', x:1.0, y:1.8, w:2.0, h:2.0 });

		// Images: Using pre-encoded base64 data values (can be a major performance boost for larger images, and removes the need to keep an image on the server and/or risk a broken link)
		slide.addImage({ x:9.3, y:4.9, w:0.5, h:0.5, data:'image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAFf0lEQVR42r2Ve0xTZxjGD2JEE2UGBZFroZRSoC1QLkXud7Bys3IRtqE4zKYbENnMGo1zXoYDdZBqBVQUdUBAYGC5FsbELWyI8YITUVS0Igo9p2yJczNbn33A4lwW2Qxub/LkO3985/2d533f7zsUNZMApUf9Z9EUZUCVR/pSFXHHqLIVVq82eRWlP7s6fBlVLVFSVbFP9aviMbsybvMry8+qC1xoWxeZa1Ir+XFBrQQGNbGYVyPF3Bpp8SsBBJ8JNvdvjFCKlFE6XkMUbOolsKiPg0VDMubWxnTPGLCmMdA0uSWsO6Y5HKGNEfBVRsJTKYF74yqImlOxqFYyNDNAZ+DczI6gr9arQpGhDMHOkgAo8v1QlBuAg3mhyFFEQVAVcWlGkO1d/vKtHQG62v3LoM7wAJ3igvGkCYkwnuCGsXgBHsQ4/syEcvLV3hZGLw3Y962X+IDK56cb2SIwJDm92h2MVABtDA/aFQ7QRjtCKxWRVQhtGE/HBHBGtF7WQS91yE52etb15/jgUlgEVM4rcMZaglYHCS4EheNhDEkeyYU2fALmBiZCAMafC1rM+UHjZrsS1L84pOW9fIeePX70hbB49PpJccUnEX3iJFwUJeAbQTxUrsuhjvKANpgLJsgBTBQB+TuC8bQH7cqhR/mW/v8I6aoXZ/SvidNdX5mIW3GrcScmFbclqbgVmYKBsGT0+EtxLjASmmCS2NeegJzBBAjBeBCokAPGid0zvHTp4mkh3+8Nk99JT8LQ2mTcezMF6tQU3CRSpqfq2t54/dr5uESVKlgycD/SS8d4E4iYJA90BePOA8PngHbgYIxtk0NNV7bbeVFNw1lJGH4vGcMbk9GRmQxpbhoExRuvW8rTzSb2tPj5Lb0WKr7LeJEvdyfyIxARgTgRiD0HGlv2TbXhNBM3sie66dGWBDySJaD3w0R4F6bBpeJ9CBSy6uf3PfDll08CXIm8SblcHSdd0Gw70Cy2TmPGin3B7PYJa/Zl92g+iYdm10q8m7caws83QdSwA4Itsn47u7XGE9vs7GTG19xchiYBAiIvMuZCJ+KCNN+GQCztoDGzLf3rpB0cnU8V3SjQk199kiE/ohsvjMbD/bHgK9bDrWYbPJv2wk2eq7O3e2fQkfdBAd9py5BS6KejCYCeKJEHgfCdiQvybEUgFkTm7L6bFGUwBTg2wppz4u53C4/fgmnpdfiWnMW9w1LcL5KAX5IFj/pceLXI4VmjAC8wCzyHTeA7ybDVOWkKwCVyEYJ25hMXnCkAkcac/QttZGRI/hHDVrMrR/oNTt7DvKODmFfUj/nyyzh0ZCs0p8LgWpIDj7q98Gouhk9rGcSKQ+B5ZILHzYbYMRs3HEiJOCQpj/TDmbhhcZ9BJvTIxJJNURVall7lw/ZZJ9S/6R0ZhJ6iH/oFl2G9rxN95YnYcOxtiKo/g3dTKfxbKxHUVgf/0goIEz4GzysH6S6pGOYSAIs4cCRubHmkH3+6GTW2dp0q1ynakDqu3kaVDI5SBKJHIAZ5vViWX4/qsnUIqcyDb0MZglpOI7StEeFtHQhv/RqhNecQcqILO7cX69R2/Kc0y4G4In2xsn8G0ZrYCJ+7r6BHFQ0ICeQwVXBlbE5+L0x3d8N7ZxOyD+yHpKoMIU0NJLkKEW3nEKHqRVT7VUQ39D+OOz2gOO8StHzMzPYsAf06CfsDNP7aEpu/j3BClT5VeJEzK683y3h3dzN3e9ewn0wFqawBq3Y1QFrYjARFx9PkA51X0j7tlKft+FKUMPEOCZoyMqSXsJI0lpwWjRXnMVmfjC1evGD6S+yjqjnmsvZFnpva7SMzm30TN3wRtOatGvG6lFPWm2OOLnjRtTExtlpTFos2sQkn50Sf+j/id3j8G3eDGa7zAAAAAElFTkSuQmCC' });
		slide.addImage({ x:9.1, y:0.3, w:0.5, h:0.5, data:'image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAjcAAAI3AGf6F88AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAANVQTFRF////JLaSIJ+AIKqKKa2FKLCIJq+IJa6HJa6JJa6IJa6IJa2IJa6IJa6IJa6IJa6IJa6IJa6IJq6IKK+JKK+KKrCLLrGNL7KOMrOPNrSRN7WSPLeVQrmYRLmZSrycTr2eUb6gUb+gWsKlY8Wqbsmwb8mwdcy0d8y1e863g9G7hdK8htK9i9TAjNTAjtXBktfEntvKoNzLquDRruHTtePWt+TYv+fcx+rhyOvh0e7m1e/o2fHq4PTu5PXx5vbx7Pj18fr49fv59/z7+Pz7+f38/P79/f7+dNHCUgAAABF0Uk5TAAcIGBktSYSXmMHI2uPy8/XVqDFbAAABB0lEQVQ4y42T13qDMAyFZUKMbebp3mmbrnTvlY60TXn/R+oFGAyYzz1Xx/wylmWJqBLjUkVpGinJGXXliwSVEuG3sBdkaCgLPJMPQnQUDmo+jGFRPKz2WzkQl//wQvQoLPII0KuAiMjP+gMyn4iEFU1eAQCCiCU2fpCfFBVjxG18f35VOk7Swndmt9pKUl2++fG4qL2iqMPXpi8r1SKitDDne/rT8vPbRh2d6oC7n6PCLNx/bsEM0Edc5DdLAHD9tWueF9VJjmdP68DZ77iRkDKuuT19Hx3mx82MpVmo1Yfv+WXrSrxZ6slpiyes77FKif88t7Nh3C3nbFp327sHxz167uHtH/8/eds7gGsUQbkAAAAASUVORK5CYII=' });

		// Export Presentation
		pptx.save('Demo-Images');
  	}
  }
});

var el = document.getElementById('items');
var sortable = Sortable.create(el, {
	onSort: function (/**Event*/evt) {
		// same properties as onEnd
		var itemEl = evt.item;  // dragged HTMLElement
		evt.to;    // target list
		evt.from;  // previous list
		evt.oldIndex;  // element's old index within old parent
		evt.newIndex;  // element's new index within new parent
	},
});

