from PIL import Image
import os

# Directory containing the project images
input_dir = "/home/ubuntu/twenty-cents-studio/client/public/images/projects"
output_dir = "/home/ubuntu/twenty-cents-studio/client/public/images/projects_clean"

# Create output directory if it doesn't exist
if not os.path.exists(output_dir):
    os.makedirs(output_dir)

# List of images to process
images = [
    "amazon.png", "disney.png", "shake-shack.png", "mitsui.png", 
    "vector.png", "tatras.png", "yoshimoto.png", "charles-keith.png", 
    "money-forward.png", "everyx.png", "memolead.png", "yellow-hat.png"
]

def crop_image(filename):
    try:
        img_path = os.path.join(input_dir, filename)
        with Image.open(img_path) as img:
            width, height = img.size
            
            # The screenshots show the image on the left (approx 50-60%) and text on the right.
            # We'll crop to keep the left 55% to be safe and cover the visual part.
            # Adjusting crop ratio based on visual inspection of the layout (Image | Text)
            
            # Crop box: (left, top, right, bottom)
            # Keeping left 55% of the width
            crop_width = int(width * 0.55)
            
            # Also cropping a bit from top/bottom/left to remove potential UI borders if any
            # But primarily just slicing off the right text part.
            
            cropped_img = img.crop((0, 0, crop_width, height))
            
            output_path = os.path.join(output_dir, filename)
            cropped_img.save(output_path)
            print(f"Successfully cropped {filename}")
            
    except Exception as e:
        print(f"Error processing {filename}: {e}")

for img_name in images:
    crop_image(img_name)
