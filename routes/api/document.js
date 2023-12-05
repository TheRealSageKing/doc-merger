const fs = require("fs");
const path = require("path");
const { PDFDocument } = require("pdf-lib");

var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/merge", function (req, res, next) {
	res.status(200).json({
		success: true,
		message: "Merge ready",
	});
});
router.post("/merge", async function (req, res, next) {
	const base64Array = req.body.files;
	try {
		const mergedPdf = await PDFDocument.create();

		for (const base64Pdf of base64Array) {
			const pdfBytes = Buffer.from(base64Pdf, "base64");
			const pdfDoc = await PDFDocument.load(pdfBytes);
			const copiedPages = await mergedPdf.copyPages(pdfDoc, pdfDoc.getPageIndices());
			copiedPages.forEach((page) => mergedPdf.addPage(page));
		}

		const mergedPdfBytes = await mergedPdf.save();
		const str = Buffer.from(mergedPdfBytes).toString("base64");

		res.json({
			success: true,
			document: `data:image/png;base64,${str}`,
		});
	} catch (error) {
		console.error("Error merging PDFs:", error);
		next(error);
	}
});

module.exports = router;
