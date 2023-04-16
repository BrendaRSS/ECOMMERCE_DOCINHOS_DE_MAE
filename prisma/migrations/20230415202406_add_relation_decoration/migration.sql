-- AddForeignKey
ALTER TABLE "decorations" ADD CONSTRAINT "decorations_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categoryDecoration"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
